import Container from "@/components/Container";

export const metadata = { title: "About" };

export default function Page() {
  return (
    <main id="main">
      <Container className="py-24">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-4 text-muted">Coming soon.</p>
      </Container>
    </main>
  );
}
