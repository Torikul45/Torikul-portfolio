import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#1e2125]">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}