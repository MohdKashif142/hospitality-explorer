export default function Page() {
  const certs = [
    "IBM Certified System Programmer — z/OS",
    "IBM Certified BPM Developer",
    "IBM MQ System Administrator",
    "IBM Maximo Asset Management Functional Analyst",
    "IBM Certified Integration Developer (ACE/IIB)",
  ];

  return (
    <main className="bg-[#f6f7fb]">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#142033]">Certifications & Vetting Standards</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div key={c} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-indigo-50 mb-3" />
              <p className="text-sm text-slate-700">{c}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}