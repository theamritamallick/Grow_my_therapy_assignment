export default function Banner() {
  return (
    <section className="bg-[#7C7A45] text-white py-40">

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
        <button className="border border-white px-10 py-4 tracking-wide text-sm hover:bg-white hover:text-[#7C7A45] transition">
          GET IN TOUCH →
        </button>

      </div>

    </section>
  );
}
