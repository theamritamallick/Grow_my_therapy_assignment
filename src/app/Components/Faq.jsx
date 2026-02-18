"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you offer virtual sessions?",
    a: "Yes. I provide secure telehealth sessions for clients located anywhere in California, in addition to in-person appointments."
  },
  {
    q: "What concerns do you specialize in?",
    a: "I primarily work with anxiety, trauma, burnout, perfectionism, and chronic stress patterns."
  },
  {
    q: "What therapy approaches do you use?",
    a: "My work integrates evidence-based approaches including CBT, EMDR, mindfulness practices, and body-oriented techniques." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#cce3de] py-24">

      <div className="max-w-7xl mx-auto px-16 grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/butterfly2.jpg"
            alt="flowers"
            className="rounded-[200px_200px_0_0] w-[420px] h-[600px] object-cover"
          />
        </div>

        {/* RIGHT FAQ */}
        <div className="text-[#1F2D2B]">

          <h2 className="text-4xl font-semibold py-12 mb-12">
            FAQs
          </h2>

          <div className="border-t border-[#1F2D2B]">

            {faqs.map((item, i) => (
              <div key={i} className="border-b border-[#254B4F]">

                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left text-2xl"
                >
                  <span>{item.q}</span>
                  <span className="text-3xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                {openIndex === i && (
                  <div className="pb-6 text-lg text-[#4A5A49]">
                    {item.a}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
