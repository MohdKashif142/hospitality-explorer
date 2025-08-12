const tiles = [
  "IBM z/OS Mainframe (COBOL, JCL, DB2, VSAM)",
  "IBM Maximo (EAM, Work Orders, Inventory, Asset Management)",
  "IBM BPM / BAW (Business Automation Workflow)",
  "IBM WebSphere Application Server (WAS)",
  "IBM Integration Bus (IIB), App Connect Enterprise (ACE)",
  "IBM MQ & Message Broker",
  "IBM API Connect, DataPower Gateway",
  "IBM Cloud Pak for Integration, IBM Cloud",
];

export default function Page() {
  return (
    <main className="bg-[#0b1c36] text-white">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Platforms & Modules We Support</h2>
        <p className="mt-3 text-center text-white/80">End‑to‑end Workday coverage across HR, Finance, and Technical domains</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <div key={t} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <div className="h-10 w-10 rounded-full bg-white/10 mb-3" />
              <p className="text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
