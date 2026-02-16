export default function Specialities() {
  const data = [
    {
      title: "Self-Esteem",
      text: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      img: "/images/self-esteem.jpg"
    },
    {
      title: "Relationships",
      text: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      img: "/images/relationships.jpg"
    },
    {
      title: "Burnout",
      text: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      img: "/images/burnout.jpg"
    }
  ];

  return (
    <section className="bg-[#F4EFEA] py-28">

      {/* TITLE */}
      <h2 className="text-center text-5xl font-semibold text-[#2F3E2E] mb-20">
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