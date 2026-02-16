export default function Banner() {
  return (
    <section className="bg-[#e9d8a6] text-[#1F2D2B] py-40">

      <div className="max-w-3xl mx-auto text-center px-6">

        {/* TITLE */}
        <h2 className="text-5xl font-semibold mb-10">
          Get started today.
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg leading-relaxed mb-16">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting
          this therapeutic journey with you.
        </p>

        {/* BUTTON */}
        <button className="border border-[#254B4F] px-10 py-4 tracking-wide text-sm hover:bg-[#254B4F] hover:text-[#7C7A45] hover:text-white transition">
          GET IN TOUCH →
        </button>

      </div>

    </section>
  );
}
