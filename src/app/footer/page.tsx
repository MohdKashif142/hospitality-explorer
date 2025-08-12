export default function Page() {
  return (
    <main className="bg-white">
      <footer className="app-container py-16 lg:py-24 border-t">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">SkillsCapital.</h3>
            <p className="mt-2 text-sm text-slate-600">Professional tech talent platform connecting businesses with pre‑vetted experts.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>SAP Talent Cloud</li>
              <li>Enterprise Talent Cloud</li>
              <li>AI‑Powered Vetting</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>Help</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Get In Touch</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>+91 123 465 789</li>
              <li>info@skillscapital.io</li>
              <li>Pune, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">Copyright © 2025 All Rights Reserved.</div>
      </footer>
    </main>
  );
}
