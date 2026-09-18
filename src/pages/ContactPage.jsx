export default function ContactPage(){
  const companyDetails = [
    { label: "Company name", value: "GREENGATE PROPERTY LTD" },
    { label: "Company number", value: "14268304" },
    { label: "Registered office address", value: "223 Prince Regent Lane, London, England, E13 8SD" },
  ];

  return (
    <main className="bg-emerald-50">
      <section className="container py-16 lg:py-20">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-lg shadow-emerald-100 sm:p-10 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Contact</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Get in touch with GreenGate</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">We would love to hear from you about your next move, property query, or viewing request.</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 rounded-[1.5rem] bg-emerald-50 p-6">
              {companyDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white shadow-md shadow-emerald-200">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">WhatsApp</p>
              <h2 className="mt-4 text-2xl font-bold">Message us directly</h2>
              <p className="mt-3 text-emerald-50/90">For a fast response about property enquiries, bookings, or general questions.</p>
              <a
                href="https://wa.me/15551234567?text=Hello%20GreenGate%20Property%2C%20I%20want%20to%20ask%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
