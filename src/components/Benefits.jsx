export default function Benefits() {
  const items = [
    ["📦", "Produk Lengkap", "Beragam kebutuhan sekolah dan kantor tersedia lengkap"],
    ["🚚", "Pengiriman Cepat", "Proses cepat & aman ke seluruh Indonesia"],
    ["🛡️", "Produk Original", "Jaminan produk original dan berkualitas"],
    ["🎧", "Fast Response", "Layanan admin cepat via WhatsApp"],
  ];

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white shadow-xl ring-1 ring-slate-100">
        <div className="grid md:grid-cols-4">
          {items.map(([icon, title, desc], index) => (
            <div
              key={title}
              className={`flex items-center gap-5 px-7 py-7 ${
                index !== items.length - 1
                  ? "border-b border-slate-100 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-4xl shadow-sm">
                {icon}
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}