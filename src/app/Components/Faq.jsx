"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "I am currently an out-of-network provider, but I can provide superbills for reimbursement."
  },
  {
    q: "What are your rates?",
    a: "Session fees vary depending on service type. Please contact me for current rates."
  },
  {
    q: "Do you have any openings?",
    a: "Availability changes weekly. Reach out and I’ll share my current openings."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#EDE7E1] py-24">

      <div className="max-w-7xl mx-auto px-16 grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/faq.jpg"
            alt="flowers"
            className="rounded-[200px_200px_0_0] w-[420px] h-[600px] object-cover"
          />
        </div>

        {/* RIGHT FAQ */}
        <div className="text-[#2F3E2E]">

          <h2 className="text-4xl font-semibold py-12 mb-12">
            FAQs
          </h2>

          <div className="border-t border-[#2F3E2E]">

            {faqs.map((item, i) => (
              <div key={i} className="border-b border-[#2F3E2E]">

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
