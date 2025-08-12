const industries = [
  {
    title: "Banking & Financial Services",
    text: "COBOL‑based core banking, IBM MQ‑based transaction queues",
  },
  { title: "Utilities & Energy", text: "Maximo for asset lifecycle, GIS integrations, IIB‑based SCADA feeds" },
  { title: "Telecom", text: "High‑volume MQ messaging, BPM for customer workflows" },
  { title: "Manufacturing", text: "Maximo Inventory, Preventive Maintenance, WebSphere admin" },
  { title: "Public Sector", text: "Mainframe apps, record archiving, BPM governance workflows" },
  { title: "Insurance", text: "Claims management on mainframe, policy workflow automation via IIB" },
];

export default function Page() {
  return (
    <main className="bg-[#f6f7fb]">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#142033]">Industries We Specialize In</h2>
        <p className="mt-2 text-center text-slate-600">Trusted Workday consultants across global and regulated sectors</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <article key={i.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="aspect-[16/9] w-full rounded-xl bg-slate-100" />
              <h3 className="mt-4 font-semibold text-[#142033]">{i.title}</h3>
              <p className="text-sm text-slate-700">{i.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
