"use client";

import { useRef, useState } from "react";
import { siteInfo } from "@/lib/site";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

// Topics shown in the dropdown — edit freely
const TOPICS = [
  "General question",
  "Locker rental",
  "Events",
  "Joining SMCSS",
  "Partnerships & sponsorship",
  "Website feedback",
];

type Fields = { name: string; email: string; topic: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", topic: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    e.email = "Please enter a valid email, like name@upei.ca.";
  if (!f.topic) e.topic = "Please choose a topic.";
  if (f.message.trim().length < 10) e.message = "Please write a message (at least 10 characters).";
  return e;
}

const fieldClass = (error?: string) =>
  `mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-base ${
    error ? "border-red-700 dark:border-red-400" : "border-line"
  }`;

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-700 dark:text-red-400">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const startedAt = useRef(0);
  const successRef = useRef<HTMLHeadingElement>(null);

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // 1. Validate
    const found = validate(fields);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      requestAnimationFrame(() => document.getElementById(`contact-${firstError}`)?.focus());
      return;
    }

    // 2. Spam checks: honeypot filled, or sent too fast → quietly "succeed"
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    if (honeypot || Date.now() - startedAt.current < 3000) {
      setStatus("success");
      return;
    }

    // 3. Send
    if (!FORM_ID) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, _subject: `SMCSS website: ${fields.topic}` }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-2">Message sent</p>
        <h2 ref={successRef} tabIndex={-1} className="mt-2 text-2xl font-semibold tracking-tight">
          Thanks{fields.name.trim() ? `, ${fields.name.trim().split(" ")[0]}` : ""}!
        </h2>
        <p className="mt-2 text-muted">
          We&apos;ll reply to {fields.email || "your email"} as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setStatus("idle");
            startedAt.current = 0;
          }}
          className="mt-6 inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm font-medium hover:bg-ink/5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onFocus={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
      className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Send us a message</h2>
      <p className="mt-1 text-sm text-muted">All fields are required.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass(errors.name)}
          />
          <ErrorText id="contact-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClass(errors.email)}
          />
          <ErrorText id="contact-email-error" message={errors.email} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-topic" className="text-sm font-medium">Topic</label>
        <select
          id="contact-topic"
          value={fields.topic}
          onChange={update("topic")}
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "contact-topic-error" : undefined}
          className={fieldClass(errors.topic)}
        >
          <option value="">Choose a topic…</option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <ErrorText id="contact-topic-error" message={errors.topic} />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
        <textarea
          id="contact-message"
          rows={6}
          value={fields.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={fieldClass(errors.message)}
        />
        <ErrorText id="contact-message-error" message={errors.message} />
      </div>

      {/* Honeypot: hidden from people, but bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="contact-gotcha">Leave this field empty</label>
        <input id="contact-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-xl border border-red-700 p-4 text-sm text-red-700 dark:border-red-400 dark:text-red-400">
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href={`mailto:${siteInfo.email}`} className="font-medium underline">{siteInfo.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-6 font-medium text-accent-ink transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}