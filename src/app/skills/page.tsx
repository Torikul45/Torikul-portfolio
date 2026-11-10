import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#1e2125]">
      <Navbar />
      <Skills />
      <Footer />
    </main>
  );
}