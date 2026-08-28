export default function StoreStats() {
  const stats = [
    {
      value: "100+",
      label: "Produk Aktif",
      desc: "Katalog ATK siap order",
    },
    {
      value: "1000+",
      label: "Pelanggan",
      desc: "Toko, kantor, sekolah",
    },
    {
      value: "10+",
      label: "Brand ATK",
      desc: "Produk original",
    },
    {
      value: "Fast",
      label: "Response",
      desc: "Admin via WhatsApp",
    },
  ];

  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 p-8 text-white shadow-2xl">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
            >
              <p className="text-5xl font-black">{item.value}</p>

              <p className="mt-2 text-lg font-black">{item.label}</p>

              <p className="mt-1 text-sm text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}