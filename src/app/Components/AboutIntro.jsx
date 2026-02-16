export default function AboutIntro() {
  return (
    <section className="bg-[#cce3de] py-32 items-center">

      <div className="max-w-7xl mx-auto px-16 grid md:grid-cols-2 items-center gap-20">

        {/* LEFT TEXT */}
        <div className="space-y-10 text-[#1F2D2B] max-w-xl items-center">

          <h2 className="text-5xl font-semibold">
            Hi, I’m Lilac.
          </h2>

          <p className="text-lg leading-relaxed">
            I’m committed to providing a safe and supportive environment
            where we can explore your thoughts, feelings, and behaviors.
            With empathy and guidance, we’ll work together to navigate
            the challenges life throws your way.
          </p>

          <button className="mt-4 border border-[#254B4F] pl-8 px-8 py-3 text-sm tracking-wide hover:bg-[#254B4F] hover:text-white transition">
            LET’S CHAT →
          </button>

        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">

          {/* Tall Image */}
          <img
            src="/images/AboutIntro.jpg"
            alt="flowers"
            className="rounded-[200px_200px_0_0] w-[420px] h-[560px] object-cover"
          />

          {/* Floating Circle Image */}
          <img
            src="/images/AboutIntro1.jpg"
            alt="flowers close"
            className="
              absolute
              bottom-[-40px]
              right-[10px]
              w-[220px]
              h-[220px]
              rounded-full
              object-cover
            "
          />

        </div>

      </div>

    </section>
  );
}
