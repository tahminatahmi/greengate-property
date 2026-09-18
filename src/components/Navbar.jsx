import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Home", "/"], ["Properties", "/properties"], ["About", "/about"], ["Contact", "/contact"]];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-emerald-50/95 backdrop-blur">
      <div className="container flex h-[74px] items-center justify-between">
        <Logo />

        <nav className="hidden gap-8 md:flex">
          {links.map(([a, b]) => (
            <NavLink
              key={b}
              to={b}
              className={({ isActive }) =>
                `text-sm font-semibold ${isActive ? "text-emerald-700" : "text-slate-700 hover:text-emerald-700"}`
              }
            >
              {a}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-emerald-100 bg-emerald-50 px-5 py-4 md:hidden">
          {links.map(([a, b]) => (
            <Link
              key={b}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 font-semibold text-slate-700"
              to={b}
            >
              {a}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
