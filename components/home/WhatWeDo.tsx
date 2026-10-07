import Container from "../Container";
import SectionHeading from "../SectionHeading";

// Based on SMCSS's official objectives (current upeismcss.ca About page)
const pillars = [
  {
    title: "Mutual support",
    text: "A place for students in the School to get to know each other and support one another.",
  },
  {
    title: "Learning",
    text: "Workshops and projects that build your skills beyond the classroom.",
  },
  {
    title: "Outreach",
    text: "Activities that make math and computer science better known across UPEI and to high school students.",
  },
  {
    title: "Faculty connections",
    text: "Friendly, respectful ties with faculty and staff in the School and related departments.",
  },
];

export default function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="what-we-do"
          label="who we are"
          title="Math, code, and the people who love both."
          description="SMCSS is a student club ratified under the UPEI Student Union. We bring together students in UPEI's School of Mathematical and Computational Sciences through support, learning, and plenty of fun."
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