export default function Header() {
  return (
    <header className="w-full bg-[#cce3de]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* LOGO */}
        <h1 className="text-3xl font-semibold text-[#2F3E2E]">
          Butterfly in the wild
        </h1>

        {/* NAV */}
        <nav className="flex gap-10 text-[#2F3E2E] text-lg">
          <a href="#" className="hover:opacity-70 transition">
            Blog
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
