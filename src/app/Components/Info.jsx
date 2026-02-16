export default function Info() {
  return (
    <footer className="bg-[#E1E9E8] text-[#2F3E2E] px-10 py-24">

      <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">

        {/* LEFT COLUMN */}
        <div className="space-y-8">

          <h2 className="text-4xl font-semibold">
            Lilac Template
          </h2>

          <div className="space-y-2 text-lg">
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
          </div>

          <div className="space-y-2 text-lg">
            <p className="underline cursor-pointer">
              email@example.com
            </p>
            <p className="underline cursor-pointer">
              (555) 555-5555
            </p>
          </div>

        </div>

        {/* MIDDLE COLUMN */}
        <div className="space-y-8">

          <h3 className="text-3xl font-semibold">
            Hours
          </h3>

          <div className="text-lg space-y-2">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8 md:text-right">

          <h3 className="text-3xl font-semibold">
            Find
          </h3>

          <div className="text-lg space-y-3">

            <p className="underline cursor-pointer hover:opacity-70">
              Home
            </p>

            <p className="underline cursor-pointer hover:opacity-70">
              Contact
            </p>

            <p className="underline cursor-pointer hover:opacity-70">
              Blog
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

