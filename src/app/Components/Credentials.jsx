"use client";
import { useState } from "react";

const sections = [
  {
    title: "Education",
    content: "Master’s Degree in Clinical Psychology from XYZ University. Bachelor’s in Behavioral Science."
  },
  {
    title: "Licensure",
    content: "Licensed Professional Counselor (LPC) – Minnesota Board of Psychology."
  },
  {
    title: "Certifications",
    content: "Certified Trauma Therapist • CBT Specialist • Mindfulness Practitioner"
  }
];

export default function Credentials() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-[#cce3de] py-32">

      <div className="max-w-3xl mx-auto px-6 text-[#1F2D2B]">

        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-center mb-16">
          My Professional Background
        </h2>

        {/* ACCORDION */}
        <div className="border-t border-[#2F3E2E]">

          {sections.map((item, i) => (
            <div key={i} className="border-b border-[#2F3E2E]">

              {/* HEADER */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-6 text-xl"
              >
                {item.title}
                <span className="text-2xl">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-lg text-[#4A5A49]">
                  {item.content}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
