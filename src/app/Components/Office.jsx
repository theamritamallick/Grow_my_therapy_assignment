export default function Office() {
  return (
    <section className="bg-[#CCE3DE] py-40">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-4xl text-[#2F5D62] mb-10">
          A Calm Space for Healing
        </h2>

        {/* TEXT */}
        <p className="max-w-2xl mx-auto text-lg text-[#1F2D2B] leading-relaxed mb-24">
          Sessions take place in a quiet, private office in Santa Monica designed
          to feel calm, grounding, and welcoming. With natural light and a simple,
          uncluttered atmosphere, the space is intended to help you settle in
          comfortably and focus on your experience.
          <br /><br />
          In-person sessions are available, along with secure telehealth
          appointments for clients located anywhere in California.
        </p>

        <h2 className="text-4xl text-[#2F5D62] mb-10">
          Address: 123th Street 45 W, Santa Monica, CA 90401
        </h2>

        {/* IMAGE COMPOSITION */}
        <div className="relative flex justify-center">

          {/* MAIN IMAGE */}
          <img
            src="images/office2.jpeg"
            alt="therapy office"
            className="rounded-[40px] w-[75%] h-[520px] object-cover shadow-lg"
          />

          {/* FLOATING IMAGE */}
          <img
            src="images/office1.jpeg"
            alt="therapy space detail"
            className="
              absolute
              -bottom-20
              right-10
              w-[260px]
              h-[260px]
              object-cover
              rounded-2xl
              shadow-md
              border-8 border-[#CCE3DE]
            "
          />

        </div>

      </div>

    </section>
  );
}