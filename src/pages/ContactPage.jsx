export default function ContactPage(){
  const companyDetails = [
    { label: "Company name", value: "GREENGATE PROPERTY LTD" },
    { label: "Email", value: "mithila@greengateproperty.co.uk", href: "mailto:mithila@greengateproperty.co.uk" },
    { label: "Phone", value: "07723351297", href: "tel:+447723351297" },
    { label: "Company number", value: "14268304" },
    { label: "Registered office address", value: "223 Prince Regent Lane, London, England, E13 8SD" },
  ];

  return (
    <main className="bg-[#edf7f1] px-4 py-8 text-left sm:px-6 lg:px-8">
      <section className="mx-auto max-w-[1280px]">
        <div className="mb-7 lg:mb-8">
          <h1 className="text-left text-[3rem] font-black leading-[0.95] tracking-[-0.06em] text-slate-900 sm:text-[4rem]">Get in touch with Greengate</h1>
          <p className="mt-3 max-w-[46rem] text-left text-[1.1rem] leading-8 text-slate-600">Contact Greengate Property about our investment and letting business.</p>
        </div>

        <div className="grid gap-8 text-left lg:grid-cols-[1.32fr_0.68fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white">
            {companyDetails.map((item) => (
              <div key={item.label} className="border-b border-slate-200 px-5 py-4 last:border-b-0 sm:px-7 sm:py-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-emerald-700">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("https://") ? "_blank" : undefined}
                    rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
                    className="mt-2 block text-[1.08rem] font-semibold leading-7 text-slate-800 transition hover:text-emerald-700 sm:text-[1.2rem]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-[1.08rem] font-semibold leading-7 text-slate-800 sm:text-[1.2rem]">{item.value}</p>
                )}
              </div>
            ))}

            <div className="grid gap-4 border-t border-slate-200 bg-slate-50/70 p-5 sm:grid-cols-2 sm:p-7">
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-emerald-700">Incorporated</p>
                <p className="mt-2 text-[1.08rem] font-semibold text-slate-800">1 August 2022</p>
              </div>
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-emerald-700">Registered SIC code</p>
                <p className="mt-2 text-[1.08rem] font-semibold text-slate-800">68209</p>
              </div>
            </div>
          </div>

          <aside className="flex items-start justify-start rounded-[1.3rem] bg-[#0b7a5b] p-6 text-left text-white shadow-[0_18px_35px_rgba(11,122,91,0.18)] sm:p-7 lg:min-h-[31rem] lg:items-center lg:justify-center">
            <div className="w-full max-w-[24rem] text-left">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-emerald-100">WhatsApp</p>
              <h2 className="mt-5 whitespace-nowrap text-[1.65rem] font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-[2.4rem] lg:text-[3.2rem]">Talk to Greengate</h2>
              <p className="mt-5 text-[1.15rem] leading-[1.5] text-emerald-50/95">Ask us anything about our investment and letting services.</p>
              <div className="mt-8 flex justify-start lg:justify-center">
                <a
                  href="https://wa.me/447723351297?text=Hello%20Greengate%20Property%2C%20I%20want%20to%20ask%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[1.02rem] font-bold text-[#0b7a5b] transition hover:bg-emerald-50"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
