const items = [
  { title: "Delivery‑tested", text: "Delivery‑tested IBM mainframe developers, Maximo consultants, and middleware experts." },
  { title: "Certified professionals", text: "Certified professionals with hands‑on project experience in banking, utilities, and telecom." },
  { title: "Fast Turnaround", text: "Receive qualified Workday profiles within 48 hours." },
  { title: "India‑Based, Globally Aligned", text: "India‑based professionals aligned to global time zones." },
  { title: "Flexible Engagement Models", text: "On‑demand, full‑time, or fractional staffing models." },
  { title: "Engagements supported", text: "Engagements supported by IBM‑certified solution architects." }
];

export default function Page() {
  return (
    <main className="bg-[#f6f7fb]">
      <section className="app-container py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142033]">Why Choose SkillsCapital for IBM Talent</h2>
          <p className="mt-3 text-sm sm:text-base text-[#6b7280]">Specialized expertise across legacy and modern IBM platforms — delivered flexibly and globally</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="card">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7eefe]">
                  <svg className="h-6 w-6 text-[#2f6bff]" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <h3 className="font-semibold text-[#142033]">{it.title}</h3>
                  <p className="mt-1 text-sm text-[#6b7280]">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#" className="pill bg-[#f5c55b] text-[#0c1c3a] shadow hover:shadow-md">Join the Partner Network →</a>
        </div>
      </section>
    </main>
  );
}
