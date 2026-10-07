import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ExecutiveCard from "@/components/ExecutiveCard";
import { executives, executiveYear } from "@/data/executives";
import { siteInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Executives",
  description: "Meet the SMCSS executive team.",
};

export default function ExecutivesPage() {
  const announced = executives.some((e) => e.name);

  return (
    <main id="main">
      <PageHeader
        label="executives"
        title="Meet the team"
        description={`The students running SMCSS for ${executiveYear}.`}
      />

      <Container className="py-12 sm:py-16">
        {!announced && (
          <p className="mb-8 rounded-2xl border border-line bg-surface p-5 text-muted">
            The {executiveYear} executive team will be announced soon. In the meantime, reach us at{" "}
            <a href={`mailto:${siteInfo.email}`} className="font-medium text-accent underline-offset-4 hover:underline">
              {siteInfo.email}
            </a>
            .
          </p>
        )}

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((e) => (
            <li key={e.role}>
              <ExecutiveCard exec={e} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
