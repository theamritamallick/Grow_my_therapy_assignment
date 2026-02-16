export default function Hero() {
  return (
    <section className="bg-[#F4EFEA] min-h-screen flex items-center">

      <div className="w-full grid md:grid-cols-2 gap-2 items-center text-center">

        {/* IMAGE */}
        <div className="flex justify-center md:justify-start pl-16">
          <img
            src="/images/hero.jpg"
            alt="flowers"
            className="rounded-[260px_260px_0_0] w-[520px]"
          />
        </div>

        {/* TEXT BLOCK */}
       <div className="flex items-center justify-center py-32 px-8 md:px-0">

  <div className="flex flex-col items-center text-center  py-32 text-[#2F3E2E]">

    <h1 className="text-[72px] leading-[1.05] font-semibold tracking-[-0.02em]">
      Live your life <br /> in full bloom
    </h1>

    <p className="mt-6 text-lg">
      Therapy for Adults in Minneapolis, MN.
    </p>

    <button className="mt-8 border border-[#2F3E2E] px-8 py-3 text-sm tracking-wide hover:bg-[#2F3E2E] hover:text-white transition">
      CONNECT WITH ME →
    </button>

  </div>

</div>

      </div>
    </section>
  );
}