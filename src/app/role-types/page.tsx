"use client";

import { useState } from "react";

const tabs = [
  "Developers & Analysts",
  "Senior Consultants",
  "Architects",
  "Project Leads / PMs",
  "Support Engineers",
];

const cards = [
  { title: "COBOL Developer", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" },
  { title: "IIB Developer", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" },
  { title: "Maximo Analyst", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" },
];

export default function Page() {
  const [active, setActive] = useState(0);

  return (
    <main className="bg-[#0b1c36] text-white">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Role Types & Seniority Levels</h2>
        <p className="mt-3 text-center text-white/80">Multi‑level IBM professionals — from legacy engineers to cloud‑enabled architects</p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold border",
                i === active ? "bg-white text-[#0b1c36] border-white" : "bg-white/10 text-white border-white/20 hover:bg-white/15",
              ].join(" ")}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white text-[#142033] p-6 shadow-sm">
          <h3 className="text-xl font-bold text-center">{tabs[active]}</h3>
          <p className="mt-2 text-center text-sm text-slate-600">
            Utilize agile, multi‑disciplinary teams that adapt in size and expertise to meet project demands.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article key={c.title} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold">{c.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
