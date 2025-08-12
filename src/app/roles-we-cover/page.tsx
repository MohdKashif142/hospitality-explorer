const groups = [
  {
    title: "Mainframe Roles",
    items: ["COBOL, JCL, z/OS Assembler Developers", "DB2 Database Programmers", "z/OS System Admins and Performance Engineers"],
  },
  { title: "Enterprise Application Roles", items: ["Maximo Functional", "Maximo Technical", "BPM Analysts"] },
  { title: "Integration & Middleware Roles", items: ["IIB/ACE Developers", "IBM MQ Admins", "API Connect Engineers"] },
  { title: "Support & QA Roles", items: ["Production Support Engineers", "Performance Testers", "QA Analysts"] },
];

export default function Page() {
  return (
    <main className="bg-white">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#142033]">Roles We Cover</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="font-semibold text-[#0b1c36]">{g.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-indigo-700">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center justify-between gap-2">
                    <span>{i}</span>
                    <span>→</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
