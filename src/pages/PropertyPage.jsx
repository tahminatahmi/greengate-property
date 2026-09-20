import { useState } from "react";
import { Bath, BedDouble, Building2, Check, ChevronLeft, ChevronRight, Heart, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { formatRent } from "../data/properties";

export default function PropertyPage({ properties, favourites, toggle }) {
  const { id } = useParams();
  const property = properties.find((item) => item.id === +id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) return <div className="container py-24 text-center"><h1 className="text-3xl font-bold">Property not found</h1></div>;

  const saved = favourites.includes(property.id);
  const whatsappLink = `https://wa.me/15551234567?text=${encodeURIComponent(`Hello GreenGate Property, I have a question about ${property.title} in ${property.location}.`)}`;
  const gallery = property.gallery?.length ? property.gallery : [property.image];
  const previousImage = () => setActiveImage((current) => (current - 1 + gallery.length) % gallery.length);
  const nextImage = () => setActiveImage((current) => (current + 1) % gallery.length);

  return (
    <main className="container py-8">
      <Link to="/properties" className="mb-6 flex items-center gap-2 font-semibold text-slate-500"><ChevronLeft size={18} />Back to portfolio</Link>
      <div className="relative overflow-hidden rounded-3xl bg-slate-100">
        <div className="relative h-[360px] sm:h-[500px]">
          <img src={gallery[activeImage]} alt={`${property.title} photo ${activeImage + 1}`} className="h-full w-full object-cover" />
          <button type="button" onClick={previousImage} aria-label="Previous property image" className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white"><ChevronLeft size={22} /></button>
          <button type="button" onClick={nextImage} aria-label="Next property image" className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white"><ChevronRight size={22} /></button>
          <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/75 px-3 py-1.5 text-xs font-bold text-white">{activeImage + 1} / {gallery.length}</span>
        </div>
        <div className="flex gap-2 overflow-x-auto p-3">
          {gallery.map((image, index) => <button type="button" key={image} onClick={() => setActiveImage(index)} aria-label={`Show property image ${index + 1}`} className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 ${activeImage === index ? "border-emerald-600" : "border-transparent"}`}><img src={image} alt="" className="h-full w-full object-cover" /></button>)}
        </div>
      </div>
      <div className="grid gap-10 py-10 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="flex justify-between gap-4">
            <div>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">PORTFOLIO PROPERTY</span>
              <h1 className="mt-4 text-4xl font-bold">{property.title}</h1>
              <p className="mt-2 flex gap-2 text-slate-500"><MapPin size={18} />{property.location}</p>
            </div>
            <button onClick={() => toggle(property.id)} className="flex h-fit items-center gap-2 rounded-xl border px-4 py-3 font-bold"><Heart className={saved ? "fill-rose-500 text-rose-500" : ""} />{saved ? "Saved" : "Save"}</button>
          </div>
          <div className="my-8 flex flex-wrap gap-8 border-y py-5"><div><b className="text-3xl">{formatRent(property.rent)}</b><p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">Monthly rent</p></div><span className="flex gap-2"><BedDouble className="text-emerald-700" />{property.beds} bedrooms</span><span className="flex gap-2"><Bath className="text-emerald-700" />{property.baths} bathrooms</span><span className="flex gap-2"><Building2 className="text-emerald-700" />{property.type}</span></div>
          <h2 className="text-2xl font-bold">About this property</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{property.description}</p>
          <h2 className="mt-10 text-2xl font-bold">Key features</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{property.features?.map((feature) => <div key={feature} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"><Check className="text-emerald-700" size={18} /><span>{feature}</span></div>)}</div>
        </div>
        <aside className="self-start rounded-2xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm">
          <div className="rounded-xl bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">Property owner</p><h3 className="mt-2 text-xl font-bold text-slate-900">GreenGate Property Ltd</h3><p className="mt-1 text-sm text-slate-600">Property investment and letting</p><div className="mt-4 flex items-center gap-2 text-sm text-slate-700"><MapPin className="text-emerald-700" size={16} /><span>{property.location}</span></div></div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary mt-4 block w-full text-center">Ask about this property</a>
        </aside>
      </div>
    </main>
  );
}
