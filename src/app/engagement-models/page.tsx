const models = [
  { title: "On‑Demand Experts", subtitle: "Certified IBM consultants with fast onboarding", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" },
  { title: "Elastic IBM Teams", subtitle: "Cross‑skilled teams with tech skills", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" },
  { title: "Fractional Talent", subtitle: "Affordable part‑time work, with SLAs", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop" },
  { title: "Project‑Based Delivery", subtitle: "Delivered with milestones and QA", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop" },
  { title: "GCC/Offshore Setup", subtitle: "India‑based delivery unit under your brand", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" }
];

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#0c1c3a] via-[#0e2c57] to-[#0c3e63]">
      <section className="app-container py-16 lg:py-24">
        <h2 className="text-center text-white text-3xl sm:text-4xl font-extrabold">Engagement Models</h2>
        <p className="mt-3 text-center text-white/80">Scalable IBM staffing models to suit your delivery and operational needs</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <article key={m.title} className="card overflow-hidden p-0">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={m.img} alt={m.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#142033]">{m.title}</h3>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">↗</span>
                </div>
                <p className="mt-1 text-sm text-[#6b7280]">{m.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}