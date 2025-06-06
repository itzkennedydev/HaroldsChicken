import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/ui/container";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Container as="section" className="py-16 space-y-4">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-lg">Phone: (312) 555-0123</p>
        <p className="text-lg">Email: <a className="text-red-700 underline" href="mailto:info@haroldschickensportsbar.com">info@haroldschickensportsbar.com</a></p>
      </Container>
      <Footer />
    </main>
  );
}
