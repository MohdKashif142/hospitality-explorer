const left = [
  "Legacy Application Modernization",
  "Maximo Upgrades & Implementations",
  "Middleware Integration",
];
const right = [
  "Performance Optimization",
  "Ongoing Support & Enhancements",
  "PoCs & Pilots",
];
const activities = ["Enhancing COBOL logic", "Exposing APIs", "Containerization"];

export default function Page() {
  return (
    <main className="bg-[#f6f7fb]">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#142033]">Project Types We Support</h2>
        <p className="mt-3 text-center text-sm text-slate-600">Delivery‑ready talent for greenfield, migration, and post‑go‑live phases</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1.2fr,1fr]">
          <div className="space-y-3">
            {left.map((t) => (
              <div key={t} className="rounded-2xl border bg-white p-4 shadow-sm">{t}</div>
            ))}
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-center font-semibold">Example Activities</h3>
            <ul className="mt-3 space-y-2">
              {activities.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-600" />
                  <span className="text-sm text-slate-700">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            {right.map((t) => (
              <div key={t} className="rounded-2xl border bg-white p-4 shadow-sm">{t}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
