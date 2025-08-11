import Link from "next/link";

const pages = [
  { href: "/hero", label: "Hero" },
  { href: "/why-choose", label: "Why Choose" },
  { href: "/engagement-models", label: "Engagement Models" },
  { href: "/role-types", label: "Role Types & Seniority" },
  { href: "/technical-expertise", label: "Technical Expertise & Tooling" },
  { href: "/roles-we-cover", label: "Roles We Cover" },
  { href: "/certifications-standards", label: "Certifications & Vetting" },
  { href: "/vetting-process", label: "Vetting Process" },
  { href: "/project-types", label: "Project Types We Support" },
  { href: "/profiles", label: "Sample Talent Profiles" },
  { href: "/use-cases", label: "Key Use Cases" },
  { href: "/platforms-modules", label: "Platforms & Modules" },
  { href: "/cta", label: "CTA Split Form" },
  { href: "/industries", label: "Industries" },
  { href: "/footer", label: "Footer / Subscribe" }
];

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="app-container py-16">
          <h1 className="text-4xl font-extrabold">Hospitality Explorer</h1>
          <p className="mt-3 text-white/80">Click any page to preview the build.</p>
        </div>
      </section>

      <section className="app-container py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pages.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="card block font-semibold">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}