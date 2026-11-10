import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#1e2125]">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}