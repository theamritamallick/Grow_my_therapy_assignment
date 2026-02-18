export default function Banner() {
  return (
    <section className="bg-[#e9d8a6] text-[#1F2D2B] py-40">

      <div className="max-w-3xl mx-auto text-center px-6">

        {/* TITLE */}
        <h2 className="text-5xl font-semibold mb-10">
         Begin your path toward steadiness and clarity
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg leading-relaxed mb-16">
          Reach out to schedule a consultation and take the first step toward feeling more grounded, supported, and emotionally balanced.
        </p>

        {/* BUTTON */}
        <button className="border border-[#254B4F] px-10 py-4 tracking-wide text-sm hover:bg-[#254B4F] hover:text-[#7C7A45] hover:text-white transition">
          SCHEDULE CONSULTATION →
        </button>

      </div>

    </section>
  );
}
