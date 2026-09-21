import { ArrowRight, Bath, BedDouble, Check, Heart, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";
import { properties } from "../data/properties";

const featureStats = [
  { label: "Property sourcing", text: "GreenGate identifies potential property investment opportunities." },
  { label: "Auction purchases", text: "The company purchases residential or commercial property, including at auction." },
  { label: "In-house renovation", text: "Properties are improved or repaired using GreenGate's own team." },
  { label: "Rental income", text: "Retained properties are let to tenants and generate rental income." },
];

const processSteps = ["Source opportunity", "Buy property", "Arrange finance", "Renovate", "Retain and let"];

const areaCards = [
  ["Romford", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"],
  ["Ilford", "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"],
  ["Barking", "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80"],
  ["Dagenham", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"],
  ["East London", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"],
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (filters) => {
    navigate("/properties", { state: { filters } });
  };

  return (
    <main className="bg-[#f5f1ea] text-slate-800">
      <section className="container pt-5 pb-8">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
          <div className="relative overflow-hidden bg-[#edf8f1] px-6 pb-6 pt-3 lg:px-8 lg:pb-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_35%)]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-6">
              <div className="py-6 lg:py-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">Property investment and letting</p>
                <h1 className="mt-4 max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 xl:text-7xl">Building a property portfolio for the long term.</h1>
                <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">GreenGate Property Ltd sources, improves, retains and lets property as part of its investment business.</p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Link to="/properties" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-200">Explore our portfolio <ArrowRight size={16} className="ml-2" /></Link>
                  <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-5 py-3 font-semibold text-emerald-800">How we invest</Link>
                </div>
              </div>

              <div className="relative h-[360px] overflow-hidden rounded-[24px] lg:h-[470px]">
                <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80" alt="Large family home" className="h-full w-full object-cover" />
                <div className="absolute left-6 top-6 rounded-full border border-white/50 bg-[rgba(11,65,50,0.6)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-50 backdrop-blur-sm">New listing</div>
              </div>
            </div>

            <div className="relative mt-4 rounded-[18px] border border-slate-200 bg-white p-3 shadow-sm lg:p-4">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8 pt-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-900">Featured Properties</h2>
            <p className="mt-2 text-slate-600">A selection of properties held within the GreenGate portfolio.</p>
          </div>
          <Link to="/properties" className="text-sm font-semibold text-slate-700">View all properties →</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} favourite={false} onFavourite={() => {}} />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 overflow-hidden rounded-[26px] bg-[#ddeae2] p-6 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:items-center lg:p-8">
          <div className="overflow-hidden rounded-[20px]">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" alt="Thoughtful home styling" className="h-[260px] w-full object-cover" />
          </div>

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Our business model</p>
            <h3 className="mt-3 text-5xl font-black leading-[1] tracking-[-0.04em] text-slate-900">Buy, improve, retain, let.</h3>
            <div className="mt-4 text-lg text-slate-700">We invest in property and earn income from letting it.</div>
            <Link to="/about" className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white">Learn about GreenGate</Link>
          </div>

          <div className="rounded-[24px] border border-emerald-200 bg-white/60 p-5 text-center shadow-sm">
            <p className="text-xl font-black italic text-slate-900">Good people. Great moves.</p>
            <p className="mt-4 text-slate-600">Local expertise. Real results. A smoother move.</p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-900">What GreenGate Property does</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureStats.map((item) => (
            <div key={item.label} className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 grid size-12 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{item.label}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-900">Our property investment model</h2>
        <p className="mt-2 text-slate-600">How GreenGate creates value from property.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-[18px] border border-emerald-100 bg-[#edf9f2] p-4 text-center">
              <div className="mx-auto grid size-9 place-items-center rounded-full bg-emerald-700 text-sm font-bold text-white">{index + 1}</div>
              <p className="mt-4 font-semibold text-slate-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-900">Areas we cover</h2>
          <Link to="/properties" className="text-sm font-semibold text-slate-700">View properties in your area →</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {areaCards.map(([name, image]) => (
            <div key={name} className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
              <img src={image} alt={name} className="h-36 w-full object-cover" />
              <div className="p-4 text-lg font-bold text-slate-900">{name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-14 pt-4">
        <div className="rounded-[28px] bg-[#0d3d32] px-6 py-8 text-white lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">GreenGate Property Ltd</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white">Property investment and letting.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/properties" className="rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white">View portfolio</Link>
              <Link to="/contact" className="rounded-full border border-white/30 bg-transparent px-5 py-3 font-semibold text-white">Contact GreenGate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
