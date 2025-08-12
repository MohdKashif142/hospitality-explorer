export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#0c1c3a] via-[#0e2c57] to-[#0c3e63] text-white">
      <section className="app-container py-16 lg:py-24 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Start Hiring IBM Experts Today</h2>
          <p className="mt-2 text-white/80">Domain‑rich talent. Legacy + Cloud Capable. Fast Onboarding.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="pill bg-[#f5c55b] text-[#0c1c3a]">Request Full Profiles</button>
            <button className="pill border border-white/30">Schedule a Call →</button>
          </div>
        </div>

        <form className="rounded-2xl bg-white text-[#142033] p-6 shadow">
          <h3 className="text-xl font-bold">Get the match Instantly</h3>
          <p className="text-sm text-slate-600">Please complete the form and share your requirements.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input placeholder="First name" className="h-10 rounded-lg border border-slate-300 px-3" />
            <input placeholder="Last name" className="h-10 rounded-lg border border-slate-300 px-3" />
            <input placeholder="Contact Number" className="h-10 rounded-lg border border-slate-300 px-3" />
            <input placeholder="Email id" type="email" className="h-10 rounded-lg border border-slate-300 px-3" />
            <input placeholder="State/Province" className="h-10 rounded-lg border border-slate-300 px-3" />
            <input placeholder="Zip code" className="h-10 rounded-lg border border-slate-300 px-3" />
          </div>
          <button className="mt-4 w-full h-11 rounded-full bg-[#0b1c36] text-white font-semibold">Submit my details →</button>
        </form>
      </section>
    </main>
  );
}
