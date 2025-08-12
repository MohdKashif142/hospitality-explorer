"use client";

import data from "@/data/hospitality_assignment_data.json";
import { useMemo, useState } from "react";

type Experience = typeof data[number];

const propertyTypeOptions = [
  { label: "All types", value: "" },
  { label: "Business", value: "business" },
  { label: "Heritage", value: "heritage" },
  { label: "Resort", value: "resort" },
];

export default function ExperiencesPage() {
  const years = useMemo(() => {
    const set = new Set<string>();
    data.forEach((d) => d.duration && set.add(d.duration));
    return ["", ...Array.from(set).sort((a, b) => Number(b) - Number(a))];
  }, []);

  const [type, setType] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [flagshipOnly, setFlagshipOnly] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const filtered: Experience[] = useMemo(() => {
    return data.filter((exp) => {
      if (type && exp.propertyType !== type) return false;
      if (year && exp.duration !== year) return false;
      if (flagshipOnly && !exp.isFlagship) return false;
      if (query) {
        const q = query.toLowerCase();
        const text = [
          exp.property,
          exp.role,
          exp.location,
          ...exp.projects.map((p) => `${p.title} ${p.overview ?? ""}`),
        ]
          .join(" ")
          .toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [type, year, flagshipOnly, query]);

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="app-container py-10 lg:py-14">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-[#142033]">
              Hospitality Experiences
            </h1>
            <p className="text-slate-600">Interactive JSON‑driven explorer with filters.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full sm:w-auto">
            <input
              placeholder="Search property, role, project..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm"
            >
              {propertyTypeOptions.map((o) => (
                <option key={o.label} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm"
            >
              {years.map((y) => (
                <option key={y || "all"} value={y}>
                  {y ? y : "All years"}
                </option>
              ))}
            </select>
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={flagshipOnly}
                onChange={(e) => setFlagshipOnly(e.target.checked)}
                className="h-4 w-4"
              />
              Flagship only
            </label>
          </div>
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filtered.map((exp) => (
            <article key={exp.id} className="card">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#142033]">{exp.property}</h3>
                  <p className="text-sm text-slate-600">
                    {exp.role} • {exp.location} • {exp.duration}
                  </p>
                </div>
                <span className="pill bg-slate-100 text-slate-700">
                  {exp.propertyType}
                </span>
              </header>

              <ul className="mt-4 space-y-3">
                {exp.projects.map((p) => (
                  <li key={p.id} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-[#142033]">{p.title}</h4>
                        {p.overview && (
                          <p className="mt-1 text-sm text-slate-600">{p.overview}</p>
                        )}
                      </div>
                                             {"launchDate" in p && p.launchDate && (
                         <span className="text-xs text-slate-500 shrink-0">
                           {new Date(p.launchDate).toLocaleDateString()}
                         </span>
                       )}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {(p.tools || []).map((t) => (
                        <span key={t} className="pill bg-slate-100 text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.metrics && (
                      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                        {Object.entries(p.metrics).map(([k, v]) => (
                          <div key={k} className="rounded-lg bg-slate-50 p-2">
                            <div className="text-xs uppercase tracking-wide text-slate-500">{k}</div>
                            <div className="font-semibold">{String(v)}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {p.initiatives && p.initiatives.length > 0 && (
                      <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                        {p.initiatives.map((i) => (
                          <li key={i.name}>
                            <span className="font-medium">{i.name}:</span> {i.result}
                          </li>
                        ))}
                      </ul>
                    )}

                    {p.modules && Object.keys(p.modules).length > 0 && (
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {Object.entries(p.modules).map(([phase, info]) => (
                          <div key={phase} className="rounded-lg border border-slate-200 p-3">
                            <div className="text-sm font-semibold capitalize">{phase.replace(/([A-Z])/g, " $1").trim()}</div>
                                                         {"summary" in info && (
                               <p className="mt-1 text-sm text-slate-600">{(info as { summary: string }).summary}</p>
                             )}
                             {"tags" in info && (
                               <div className="mt-2 flex flex-wrap gap-2">
                                 {(info as { tags: string[] }).tags.map((t: string) => (
                                   <span key={t} className="pill bg-indigo-50 text-indigo-700">
                                     {t}
                                   </span>
                                 ))}
                               </div>
                             )}
                          </div>
                        ))}
                      </div>
                    )}

                    {p.team && p.team.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        {p.team.map((m) => (
                          <span key={m.name} className="pill bg-slate-100 text-slate-700">
                            {m.name} — {m.role} {m.lead ? "(Lead)" : ""}
                          </span>
                        ))}
                      </div>
                    )}

                                         {"documentLinks" in p && p.documentLinks && p.documentLinks.length > 0 && (
                       <div className="mt-3 flex flex-wrap gap-3 text-sm">
                         {p.documentLinks.map((l) => (
                           <a key={l} href={l} target="_blank" className="text-indigo-700 hover:underline">
                             Document ↗
                           </a>
                         ))}
                       </div>
                     )}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center text-slate-600">
              No results. Adjust filters.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


