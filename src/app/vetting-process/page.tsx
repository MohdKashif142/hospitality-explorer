const steps = [
  { title: "Technical Tasks", text: "Technical assessments in COBOL, Maximo, IIB, MQ, and BPM workflows" },
  { title: "Real‑World Scenario", text: "Integration design simulations and real‑world scenario walkthroughs" },
  { title: "Communication Check", text: "Communication, incident management, and escalation handling evaluations" },
  { title: "Peer & Reference Review", text: "Peer‑reviewed by senior IBM‑certified leads" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#142033]">Vetting Process</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                {i + 1}
              </div>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-700">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
