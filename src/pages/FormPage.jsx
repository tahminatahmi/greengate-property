import { useState } from "react";
import { Check } from "lucide-react";

export default function FormPage({ type, onSubmit }) {
  const [sent, setSent] = useState(false);
  const propertyDetails = type === "sell";

  if (sent) {
    return <main className="grid min-h-[65vh] place-items-center bg-emerald-50 px-5"><div className="max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl shadow-emerald-100"><Check className="mx-auto text-emerald-600" size={50} /><h1 className="mt-5 text-3xl font-bold text-slate-900">Thanks for getting in touch</h1><p className="mt-3 text-slate-500">We’ve received your details and will contact you shortly.</p></div></main>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    onSubmit?.(payload);
    setSent(true);
  };

  return <main className="bg-emerald-50"><div className="container grid gap-10 py-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-bold text-emerald-700">{propertyDetails ? "Share a property opportunity" : "We’re here to help"}</p><h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">{propertyDetails ? "Tell us about a property" : "Let’s talk about GreenGate"}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{propertyDetails ? "Send us the details of a property opportunity for the GreenGate team to consider." : "Send us your question and our team will get back to you."}</p><a href="https://wa.me/15551234567?text=Hello%20GreenGate%20Property%2C%20I%20want%20to%20ask%20about%20your%20properties." target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-700">Chat on WhatsApp</a></div><form onSubmit={handleSubmit} className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm shadow-emerald-100"><h2 className="mb-6 text-2xl font-bold text-slate-900">{propertyDetails ? "Property details" : "Send us a message"}</h2><div className="grid gap-5 sm:grid-cols-2">{propertyDetails && <><Input name="property-address" label="Property address" wide /><Input name="property-type" label="Property type" /><Input name="asking-price" label="Asking price" type="number" /><Input name="bedrooms" label="Bedrooms" type="number" /><Input name="bathrooms" label="Bathrooms" type="number" /><Text name="description" label="Description" /><Input name="property-features" label="Property features" wide /></>}<Input name="name" label="Name" /><Input name="email" label="Email" type="email" /><Input name="phone" label="Phone" wide /><Text name={propertyDetails ? "additional-information" : "message"} label={propertyDetails ? "Additional information" : "Message"} /></div><button className="btn-primary mt-6 w-full">Send message</button></form></div></main>;
}

function Input({ label, name, type = "text", wide }) {
  return <label className={wide ? "sm:col-span-2" : ""}><span className="label">{label}</span><input required name={name} type={type} className="control" /></label>;
}

function Text({ label, name }) {
  return <label className="sm:col-span-2"><span className="label">{label}</span><textarea required name={name} rows="4" className="control" /></label>;
}
