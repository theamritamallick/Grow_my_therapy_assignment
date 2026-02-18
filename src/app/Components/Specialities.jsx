export default function Specialities() {
  const data = [
    {
      title: "Cognitive-behavioral therapy (CBT)",
      text: "Support for persistent worry, tension, racing thoughts, and feeling mentally on edge.",
      img: "/images/anxiety.jpg"
    },
    {
      title: "Trauma Therapy",
      text: "Gentle, paced therapy using evidence-based approaches to process past experiences safely.",
      img: "/images/trauma.jpg"
    },
    {
      title: "Burnout & Stress Recovery",
      text: "For professionals, creatives, and high achievers feeling exhausted, pressured, or disconnected.",
      img: "/images/burnout1.webp"
    }
  ];

  return (
    <section className="bg-[#cce3de] py-28">

      {/* TITLE */}
      <h2 className="text-center text-5xl font-semibold text-[#1F2D2B] mb-20">
        My Specialties
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {data.map((item, i) => (
          <div
            key={i}
            className="border border-[#2F3E2E] p-10 flex flex-col justify-between min-h-[520px]"
          >

            {/* TEXT */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#2F3E2E]">
                {item.title}
              </h3>

              <p className="text-[#2F3E2E] leading-relaxed">
                {item.text}
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center mt-10">
              <img
                src={item.img}
                alt={item.title}
                className="w-64 h-64 object-cover rounded-full"
              />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}