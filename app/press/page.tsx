import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Container as="section" className="py-16">
        <h1 className="text-5xl font-bold mb-8">Press Kit</h1>
        <p className="mb-4">Download our latest press materials below.</p>
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          className="text-red-700 font-semibold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Press Kit
        </a>
      </Container>
      <Footer />
    </main>
  );
}
