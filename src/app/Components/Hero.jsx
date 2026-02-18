export default function Hero() {
  return (
    <section className="bg-[#cce3de] min-h-screen flex items-center">

      <div className="w-full grid md:grid-cols-2 gap-2 items-center text-center">

        {/* IMAGE */}
        <div className="flex justify-center md:justify-start pl-16">
          <img
            src="/images/butterfly1.jpg"
            alt="flowers"
            className="rounded-[260px_260px_0_0] w-[520px]"
          />
        </div>

        {/* TEXT BLOCK */}
       <div className="flex items-center justify-center py-20 px-8 md:px-0">

  <div className="flex flex-col items-center text-center  py-20 text-[#1F2D2B]">

    <h1 className="text-[64px] leading-[1.05] font-semibold tracking-[-0.02em] mb-8 ">
      Liberate from your cage <br /> like a butterfly.
    </h1>
    <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-2">
            Therapy for Anxiety, Trauma & Burnout in Santa Monica
          </p>

    <p className="text-lg md:text-12 max-w-xl mx-auto md:mx-0">
            Supportive, evidence-based therapy for adults seeking <br /> clarity,
            relief, and emotional balance.
          </p>

    <button className="mt-8 border border-[#254B4F] px-8 py-3 text-sm tracking-wide hover:bg-[#254B4F] hover:text-white transition">
      BOOK A CONSULTATION →
    </button>

  </div>

</div>

      </div>
    </section>
  );
}