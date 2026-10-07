import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ResourceCard from "../ResourceCard";
import { resources } from "@/data/resources";

export default function ResourcesPreview() {
  const featured = resources.filter((r) => r.featured).slice(0, 6);

  return (
    <section aria-labelledby="resources-preview" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="resources-preview"
            label="resources"
            title="Tools for every course."
            description="Handy links for math, computer science, research, and life at UPEI."
          />
          <Link href="/resources" className="shrink-0 font-medium text-accent hover:underline">
            All resources <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <li key={r.url}>
              <ResourceCard resource={r} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}