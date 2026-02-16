export default function Footer() {
  return (
    <div className="bg-[#EDE7E1] text-[#2F3E2E] border-t border-[#D8D2CC] px-6 py-12 text-center space-y-6">

      {/* TOP LINKS */}
      <div className="flex flex-wrap justify-center gap-6 text-sm">

        <a className="underline hover:opacity-70">Privacy & Cookies Policy</a>
        <a className="underline hover:opacity-70">Good Faith Estimate</a>
        <a className="underline hover:opacity-70">Website Terms & Conditions</a>
        <a className="underline hover:opacity-70">Disclaimer</a>

      </div>

      {/* CREDIT */}
      <p className="text-sm">
        Website Template Credits:{" "}
        <span className="underline cursor-pointer hover:opacity-70">
          Go Bloom Creative
        </span>
      </p>

      {/* COPYRIGHT */}
      <p className="text-sm">
        All Rights Reserved © 2024 Your Business Name Here, LLC.
      </p>

    </div>
  );
}
