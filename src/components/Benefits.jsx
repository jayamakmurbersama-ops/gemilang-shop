export default function Benefits() {
  const benefits = [
    ["🚚", "Siap Kirim", "Pesanan diproses cepat dan rapi."],
    ["💰", "Harga Grosir", "Cocok untuk reseller, kantor, sekolah, dan toko."],
    ["📦", "Produk Lengkap", "ATK sekolah, kantor, kertas, pulpen, map, dan lainnya."],
    ["💬", "Order Mudah", "Checkout langsung via WhatsApp."],
  ];

  return (
    <section className="relative overflow-hidden py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-white/40 to-amber-50/70"></div>

      <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-5 md:grid-cols-4">
          {benefits.map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-[28px] border border-white/70 bg-white/65 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/85 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-3xl shadow-lg">
                {icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-900">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}