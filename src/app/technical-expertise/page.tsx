"use client";

import { useState } from "react";

const tabs = [
  { key: "mainframe", label: "Mainframe & Programming", desc: "COBOL, JCL, DB2, z/OS expertise for modernization and resilience." },
  { key: "maximo", label: "Maximo & BPM", desc: "Functional and technical consultants for implementation and rollout." },
  { key: "integration", label: "Integration & Middleware", desc: "IIB/ACE, MQ, API Connect for high‑volume messaging and APIs." },
  { key: "devops", label: "DevOps & Platform Tools", desc: "CI/CD, containerization, and cloud platform enablement." },
];

const sampleBullets: Record<string, string[]> = {
  mainframe: [
    "COBOL Enhancements, BATCH scheduling",
    "DB2 optimization, VSAM migrations",
    "API enablement for legacy systems",
  ],
  maximo: [
    "BIRT Reporting, Escalations, Automation Scripts",
    "Work Order Management, Inventory, Asset Lifecycle",
    "Workflow Designer, Process Modeling",
  ],
  integration: [
    "Message flows, error handling patterns",
    "Event‑driven integration and gateways",
    "Observability and performance tuning",
  ],
  devops: [
    "GitOps pipelines, IaC",
    "Containerization and orchestration",
    "Security gates and SRE practices",
  ],
};

export default function Page() {
  const [active, setActive] = useState(1); // show Maximo & BPM by default
  const activeKey = tabs[active].key as keyof typeof sampleBullets;

  return (
    <main className="bg-[#0b1c36] text-white">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Technical Expertise & Tooling</h2>
        <p className="mt-3 text-center text-white/80 max-w-3xl mx-auto">
          Specialized IBM engineering across core systems, integrations, and middleware
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold border",
                i === active ? "bg-white text-[#0b1c36] border-white" : "bg-white/10 text-white border-white/20 hover:bg-white/15",
              ].join(" ")}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,2fr]">
          <div className="card bg-white/5 border-white/10 text-white">
            <h3 className="text-xl font-bold">{tabs[active].label}</h3>
            <p className="mt-2 text-white/80">{tabs[active].desc}</p>
          </div>

          <div className="space-y-4">
            {sampleBullets[activeKey].map((text, index) => (
              <div key={text} className="rounded-xl bg-white p-4 text-[#142033] shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 font-bold">
                    {index + 1}
                  </span>
                  <p className="font-medium">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
