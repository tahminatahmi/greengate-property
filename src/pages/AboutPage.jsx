import { Link } from "react-router-dom";

const model = [
  ["Source", "GreenGate identifies a potential profit or investment opportunity."],
  ["Purchase", "The company purchases residential or commercial property, including at auction."],
  ["Finance", "GreenGate arranges mortgage or other finance for acquisitions."],
  ["Renovate", "Properties are improved or repaired using the company’s own in-house team."],
  ["Retain and let", "The properties are held by GreenGate and let to tenants to earn rental income."],
];

export default function AboutPage() {
  return (
    <main className="bg-emerald-50">
      <section className="container py-16 lg:py-20">
        <div className="grid overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-lg shadow-emerald-100 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85" alt="Property investment planning" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute left-6 top-6 rounded-full border border-white/60 bg-emerald-900/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-50 backdrop-blur-sm">About GreenGate</div>
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-8 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Property investment and letting</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">A property company built around long-term ownership.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">GreenGate Property Ltd sources, purchases, renovates, retains and lets property as an investment business.</p>
            <div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800">Property investment</span><span className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800">Renovation</span><span className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800">Letting</span></div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div className="max-w-md lg:sticky lg:top-28"><p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">The GreenGate model</p><h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">What GreenGate Property Ltd does.</h2><p className="mt-5 text-lg leading-8 text-slate-600">The core business is property investment and letting, rather than acting as a letting agent. Properties are held by GreenGate instead of simply being managed for someone else.</p><Link to="/properties" className="mt-7 inline-flex rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800">View the portfolio</Link></div>
          <div className="grid gap-4 sm:grid-cols-2">{model.map(([title, text], index) => <div key={title} className={`rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm ${index === model.length - 1 ? "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)]" : ""}`}><div className="grid size-10 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-800">{index + 1}</div><h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div>
        </div>
      </section>
    </main>
  );
}
