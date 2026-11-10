import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold">
          Torikul<span className="text-orange-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-gray-600 md:flex">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/about" className="hover:text-orange-500">About</Link>
          <Link href="/projects" className="hover:text-orange-500">Projects</Link>
          <Link href="/skills" className="hover:text-orange-500">Skills</Link>
          <Link href="/contact" className="hover:text-orange-500">Contact</Link>
        </div>
      </nav>
    </header>
  );
}