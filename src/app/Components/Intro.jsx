export default function Intro() {
  return (
    <section className="bg-[#EDE7E1]">
      <div className="grid md:grid-cols-2 items-stretch min-h-[650px]">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-full w-full px-0 py-0 text-[#2F3E2E]">

          {/* TEXT BLOCK */}
          <div className="space-y-8 px-16 py-32 max-w-xl">

            <h2 className="text-5xl font-semibold">
              Live a fulfilling life.
            </h2>

            <p className="text-lg leading-relaxed">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-lg leading-relaxed">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>

          </div>

          {/* BUTTON BLOCK */}
          <div className="w-full">

            <div className="border-t border-[#2F3E2E] w-full mb-0 "></div>

             <button className="w-full h-16 text-center text-sm tracking-wide tracking-wide hover:bg-[#2F3E2E] hover:text-white transition">
              GET IN TOUCH →
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[600px] md:h-auto">
          <img
            src="/images/intro.png"
            alt="lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}