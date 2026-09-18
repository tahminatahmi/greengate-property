import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0b3d33] text-white">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark compact />
          <p className="mt-5 text-sm leading-7 text-emerald-50/80">
            Helping people across the UK find, sell and move home with more confidence.
          </p>
        </div>

        {[['Explore', [['Home', '/'], ['About', '/about']]], ['Company', [['About us', '/about'], ['Contact', '/contact']]], ['Support', [['Help centre', '/contact'], ['Privacy', '/about']]]].map(([h, links]) => (
          <div key={h}>
            <b>{h}</b>
            <div className="mt-4 grid gap-3 text-sm text-emerald-100/80">
              {links.map(([a, b]) => (
                <Link key={a} to={b}>{a}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="border-t border-white/10 py-6 text-center text-sm text-emerald-200">
        © 2026 GreenGate Property. All rights reserved.
      </p>
    </footer>
  );
}
