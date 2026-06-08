export default function Benefits() {
  const items = [
    {
      icon: "box",
      title: "Produk Lengkap",
      desc: "Beragam kebutuhan sekolah dan kantor tersedia lengkap",
    },
    {
      icon: "truck",
      title: "Pengiriman Cepat",
      desc: "Proses cepat & aman ke seluruh Indonesia",
    },
    {
      icon: "shield",
      title: "Produk Original",
      desc: "Jaminan produk original dan berkualitas",
    },
    {
      icon: "headset",
      title: "Fast Response",
      desc: "Layanan admin cepat via WhatsApp",
    },
  ];

  const Icon = ({ type }) => {
    if (type === "box") {
      return (
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-blue-700">
          <path d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2Zm0 2.2 6.1 3.05L12 10.3 5.9 7.25 12 4.2ZM5 8.9l6 3v7.55l-6-3V8.9Zm8 10.55V11.9l6-3v7.55l-6 3Z" />
        </svg>
      );
    }

    if (type === "truck") {
      return (
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-blue-700">
          <path d="M3 5h11v9h2.2l2-3H21v6h-2a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0H2V7c0-1.1.9-2 2-2Zm2 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm10 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1-10v6h1.1l1.3-2H20V9h-2l-1-2h-1Z" />
        </svg>
      );
    }

    if (type === "shield") {
      return (
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-blue-700">
          <path d="M12 2 4 5.5v6.2c0 5.1 3.4 9.8 8 11.3 4.6-1.5 8-6.2 8-11.3V5.5L12 2Zm-1 14.5-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3Z" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9 fill-blue-700">
        <path d="M12 3a8 8 0 0 0-8 8v4a3 3 0 0 0 3 3h1v-7H6a6 6 0 0 1 12 0h-2v7h1a3 3 0 0 0 3-3v-4a8 8 0 0 0-8-8Zm-2 14h4v2h-4v-2Z" />
      </svg>
    );
  };

  return (
    <section className="bg-white px-4 py-9">
      <div className="mx-auto grid max-w-7xl md:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`flex items-center gap-5 px-6 py-6 ${
              index !== items.length - 1
                ? "md:border-r md:border-slate-200"
                : ""
            }`}
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 shadow-sm">
              <Icon type={item.icon} />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 max-w-[230px] text-sm leading-6 text-slate-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}