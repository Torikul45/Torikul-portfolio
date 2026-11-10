import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#1e2125]">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}