export default function SoftCTA() {
  return (
    <section className="grid md:grid-cols-2">

      {/* LEFT IMAGE */}
      <div className="h-[650px]">
        <img
          src="/images/happy-woman.jpg"
          alt="calm woman"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="bg-[#e0fbfc] flex flex-col w-full justify-between py-0 px-0 text-[#1F2D2B]">

        {/* TEXT BLOCK */}
        <div className="space-y-10 max-w-xl pl-16 py-6">

          <h2 className="text-5xl font-semibold leading-tight">
            Navigate your life with renewed clarity.
          </h2>

          <p className="text-lg pl-6">
            If you’ve been experiencing any of the following, therapy can help:
          </p>

          <ul className="space-y-4 list-disc pl-6 text-lg">
            <li>Feeling disconnected from yourselfs</li>
            <li>difficulty relaxing or sleeping</li>
            <li>Burnout or exhaustion</li>
            <li>Constant worry or overthinking</li>
          </ul>

          <p className="text-lg pl-6">
           Together, we can work toward steadiness, clarity, and a stronger sense of balance.
          </p>

        </div>

        {/* CTA BUTTON */}
        <div className="w-full mt-0">

          <div className="border-t border-[#254B4F] w-full"></div>

          <button className="w-full h-16 text-center tracking-wide hover:bg-[#254B4F] hover:text-white transition">
            WORK WITH ME →
          </button>

        </div>

      </div>

    </section>
  );
}