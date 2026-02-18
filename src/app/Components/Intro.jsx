export default function Intro() {
  return (
    <section className="bg-[#a4c3b2]">
      <div className="grid md:grid-cols-2 items-stretch min-h-[650px]">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-full w-full px-0 py-0 text-[#1F2D2B]">

          {/* TEXT BLOCK */}
          <div className="space-y-8 px-16 py-32 max-w-xl">

            <h2 className="text-5xl font-semibold">
             You don’t have to carry everything on your own.
            </h2>

            <p className="text-lg leading-relaxed">
              Many high-achieving adults appear capable on the outside while quietly struggling with anxiety, constant pressure, or mental exhaustion.
            </p>

            <p className="text-lg leading-relaxed">
              Therapy can offer a steady space to slow down, understand what
              you’re experiencing, and begin building a more sustainable way of
              living and working.
            </p>

          </div>

          {/* BUTTON BLOCK */}
          <div className="w-full">

            <div className="border-t border-[#254B4F] w-full mb-0 "></div>

             <button className="w-full h-16 text-center text-sm tracking-wide tracking-wide hover:bg-[#254B4F] hover:text-white transition">
              GET IN TOUCH →
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[600px] md:h-auto max-h-[750px] w-full">
          <img
            src="/images/forest.jpg"
            alt="lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}