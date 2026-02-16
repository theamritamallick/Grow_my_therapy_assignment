export default function SoftCTA() {
  return (
    <section className="grid md:grid-cols-2">

      {/* LEFT IMAGE */}
      <div className="h-[650px]">
        <img
          src="/images/softCTA.jpg"
          alt="calm woman"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="bg-[#e0fbfc] flex flex-col w-full justify-between py-0 px-0 text-[#1F2D2B]">

        {/* TEXT BLOCK */}
        <div className="space-y-10 max-w-xl pl-16 py-6">

          <h2 className="text-5xl font-semibold leading-tight">
            You don’t have to do this all alone.
          </h2>

          <p className="text-lg pl-6">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="space-y-4 list-disc pl-6 text-lg">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="text-lg pl-6">
            With empathy and guidance, we'll work together to navigate
            the challenges life throws your way.
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