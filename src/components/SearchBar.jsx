import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch, compact = false }) {
  const [form, setForm] = useState({ location: "", type: "Any type", min: "", max: "", beds: "" });

  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({
      ...form,
      min: Number(form.min) || 0,
      max: Number(form.max) || Infinity,
      beds: Number(form.beds) || 0,
    });
  };

  return (
    <form onSubmit={submit} className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className={`grid gap-3 ${compact ? "lg:grid-cols-[1.7fr_1.2fr_1.2fr_1.2fr_1fr_auto]" : "lg:grid-cols-[1.7fr_1.2fr_1.2fr_1.2fr_1fr_auto]"}`}>
        <Field label="Location / Postcode">
          <input
            placeholder="e.g. Ilford, IG1"
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
            className="w-full border-0 bg-transparent text-sm font-semibold text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </Field>

        <Field label="Property Type">
          <select value={form.type} onChange={(e) => set("type", e.target.value)} className="w-full border-0 bg-transparent text-sm font-semibold text-slate-700 focus:outline-none">
            <option>Any type</option>
            <option>Detached</option>
            <option>Flat</option>
            <option>Terraced</option>
            <option>Townhouse</option>
          </select>
        </Field>

        <Field label="Min rent">
          <select value={form.min} onChange={(e) => set("min", e.target.value)} className="w-full border-0 bg-transparent text-sm font-semibold text-slate-700 focus:outline-none">
            <option value="">Any rent</option>
            <option value="1500">£1,500</option>
            <option value="2000">£2,000</option>
            <option value="2500">£2,500</option>
            <option value="3000">£3,000</option>
          </select>
        </Field>

        <Field label="Max rent">
          <select value={form.max} onChange={(e) => set("max", e.target.value)} className="w-full border-0 bg-transparent text-sm font-semibold text-slate-700 focus:outline-none">
            <option value="">Any rent</option>
            <option value="2000">£2,000</option>
            <option value="2500">£2,500</option>
            <option value="3000">£3,000</option>
            <option value="4000">£4,000+</option>
          </select>
        </Field>

        <Field label="Bedrooms">
          <select value={form.beds} onChange={(e) => set("beds", e.target.value)} className="w-full border-0 bg-transparent text-sm font-semibold text-slate-700 focus:outline-none">
            <option value="">Any</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </Field>

        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-800">
          <Search size={18} />
          Search
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex min-h-[72px] flex-col justify-center rounded-xl bg-slate-50 px-3 py-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</span>
      <span className="mt-1">{children}</span>
    </label>
  );
}
