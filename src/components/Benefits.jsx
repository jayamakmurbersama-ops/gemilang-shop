export default function Benefits() {
  const items = [
    {
      icon: "📦",
      title: "Produk Lengkap",
      desc: "Beragam kebutuhan sekolah dan kantor tersedia lengkap",
    },
    {
      icon: "🚚",
      title: "Pengiriman Cepat",
      desc: "Proses cepat & aman ke seluruh Indonesia",
    },
    {
      icon: "🛡️",
      title: "Produk Original",
      desc: "Jaminan produk original dan berkualitas",
    },
    {
      icon: "🎧",
      title: "Fast Response",
      desc: "Layanan admin cepat via WhatsApp",
    },
  ];

  return (
    <section className="bg-white px-4 py-8">

      <div className="mx-auto grid max-w-7xl md:grid-cols-4">

        {items.map((item, index) => (

          <div
            key={item.title}
            className={`
              flex
              items-center
              gap-5
              px-6
              py-6
              ${index !== items.length - 1
                ? "md:border-r md:border-slate-200"
                : ""}
            `}
          >

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-3xl shadow-sm">
              {item.icon}
            </div>

            <div>

              <h3 className="text-lg font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}