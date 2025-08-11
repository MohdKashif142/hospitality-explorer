import Link from "next/link";

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#0c1c3a] via-[#0e2c57] to-[#0c3e63] text-white">
      <div className="app-container py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-extrabold">
            Hire Top IBM Tech Talent — On‑Demand, Delivery‑Tested
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            Mainframe, Maximo, BPM, Integration Bus — access pre‑vetted IBM experts from India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#" className="pill bg-[#f5c55b] text-[#0c1c3a] shadow hover:shadow-md">Request Sample Profiles</Link>
            <Link href="#" className="pill border border-white/30 bg-white/0 text-white hover:bg-white/10">Submit a Requirement →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}