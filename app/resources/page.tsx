import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ResourceExplorer from "@/components/ResourceExplorer";
import { resourceCategories, resources } from "@/data/resources";
import { siteInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Academic help, course tools, and student opportunities for SMCS students at UPEI.",
};

export default function ResourcesPage() {
  // Only show filter buttons for categories that have resources
  const categories = resourceCategories.filter((c) => resources.some((r) => r.category === c));

  return (
    <main id="main">
      <PageHeader
        label="resources"
        title="Resources"
        description="Help centres, course tools, research software, and opportunities, all in one searchable place."
      />

      <Container className="py-12 sm:py-16">
        <ResourceExplorer resources={resources} categories={categories} />

        <p className="mt-12 text-sm text-muted">
          Know a resource that should be here?{" "}
          <a
            href={`mailto:${siteInfo.email}?subject=${encodeURIComponent("Resource suggestion")}`}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            Suggest it to SMCSS
          </a>
          .
        </p>
      </Container>
    </main>
  );
}