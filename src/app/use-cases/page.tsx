const items = [
  {
    title: "North America Bank — Mainframe Modernization",
    need: "Enhance COBOL systems with new API integration",
    talent: "3 COBOL Developers + 1 IBM MQ Architect",
    outcome: "Legacy system exposed via modern REST APIs with zero disruption",
  },
  {
    title: "Global Retail — Maximo Upgrade",
    need: "Inventory, preventive maintenance, mobile work orders",
    talent: "Maximo Functional + Technical team",
    outcome: "Improved asset lifecycle visibility and technician productivity",
  },
];

export default function Page() {
  return (
    <main className="bg-[#f6f7fb]">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#142033]">Key Use Cases</h2>
        <p className="mt-2 text-center text-slate-600">How global firms used our IBM experts to modernize, integrate, and maintain</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {items.map((c) => (
            <article key={c.title} className="card">
              <h3 className="text-lg font-bold text-[#142033]">{c.title}</h3>
              <div className="mt-2 grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-slate-500">Need:</div>
                  <div>{c.need}</div>
                </div>
                <div>
                  <div className="text-slate-500">Talent:</div>
                  <div>{c.talent}</div>
                </div>
                <div>
                  <div className="text-slate-500">Outcome:</div>
                  <div>{c.outcome}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
