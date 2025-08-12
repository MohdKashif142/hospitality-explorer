const profiles = [
  { name: "Ravi Krishnan", role: "FICO + RAP Developer", domain: "12 yrs, Banking" },
  { name: "Ravi Krishnan", role: "MM Config Expert + LTMC", domain: "10 yrs, Manufacturing" },
  { name: "Ravi Krishnan", role: "CPI Integration Lead", domain: "14 yrs, Pharma" },
];

export default function Page() {
  return (
    <main className="bg-[#f6f7fb]">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#142033]">Sample Workday Talent Profiles</h2>
        <p className="mt-3 text-center text-sm text-slate-600">Our freelancers bring contextual understanding of verticals like:</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {profiles.map((p, idx) => (
            <article key={idx} className="rounded-2xl border bg-white p-0 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-b from-amber-300 to-amber-200 h-28" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#142033]">{p.name}</h3>
                <p className="text-slate-600 text-sm">Role: {p.role}</p>
                <div className="mt-4">
                  <button className="pill bg-[#0b1c36] text-white">Request Full Profile →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a className="pill bg-[#0b1c36] text-white/90" href="#">Explore more profiles →</a>
        </div>
      </section>
    </main>
  );
}
