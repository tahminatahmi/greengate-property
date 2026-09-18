import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0b3d33] text-white">
      <div className="container grid gap-12 py-14 lg:grid-cols-[1.25fr_0.85fr_0.85fr_1fr]">
        <div className="max-w-sm">
          <Logo dark compact />
          <p className="mt-5 text-sm leading-7 text-emerald-50/80">
            A straightforward property service for people making their next move. Browse with confidence, sell with a clear plan, and talk to a real person when you need one.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-emerald-200">
            Start your next move <ArrowUpRight size={16} />
          </Link>
        </div>

        {[['Find a home', [['View properties', '/properties'], ['About GreenGate', '/about']]], ['Make a move', [['Sell your property', '/sell'], ['Contact our team', '/contact']]]].map(([h, links]) => (
          <div key={h}>
            <p className="text-sm font-bold text-white">{h}</p>
            <div className="mt-4 grid gap-3 text-sm text-emerald-100/80">
              {links.map(([label, path]) => (
                <Link key={label} to={path} className="transition hover:text-white">{label}</Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <p className="text-sm font-bold text-white">Talk to us</p>
          <a href="https://wa.me/15551234567?text=Hello%20GreenGate%20Property%2C%20I%20want%20to%20ask%20about%20your%20services." target="_blank" rel="noreferrer" className="mt-4 flex items-start gap-3 text-sm leading-6 text-emerald-100/80 transition hover:text-white">
            <MessageCircle size={18} className="mt-1 shrink-0 text-emerald-300" />
            <span>Message us about a viewing, valuation or property question.</span>
          </a>
          <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-emerald-100/80">
            <MapPin size={18} className="mt-1 shrink-0 text-emerald-300" />
            <span>223 Prince Regent Lane<br />London, E13 8SD</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-sm text-emerald-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GreenGate Property Ltd. Company no. 14268304.</p>
          <Link to="/contact" className="transition hover:text-white">Contact GreenGate</Link>
        </div>
      </div>
    </footer>
  );
}
