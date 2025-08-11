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
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Hospitality Explorer — Pages</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}