import Container from "../Container";
import SectionHeading from "../SectionHeading";

// PLACEHOLDER COPY: confirm with the society
const pillars = [
  {
    title: "Academic support",
    text: "Study nights, peer help, and resources for math, CS, stats, and data courses.",
  },
  {
    title: "Events & community",
    text: "Socials, workshops, and competitions that connect students across the School.",
  },
  {
    title: "Student services",
    text: "A canteen and locker rentals, run by students for students.",
  },
  {
    title: "Career growth",
    text: "Panels and connections to help you plan what comes after your degree.",
  },
];

export default function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="what-we-do"
          label="what we do"
          title="A home base for everyone in the School."
          description="Whether it's your first term or your last, SMCSS is here to make student life easier and more connected."
        />
        <ol className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="border-b border-line py-8 pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}