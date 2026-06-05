export default function Benefits() {
  const benefits = [
    ["🚚", "Siap Kirim", "Pesanan diproses cepat dan rapi."],
    ["💰", "Harga Grosir", "Cocok untuk reseller, kantor, sekolah, dan toko."],
    ["📦", "Produk Lengkap", "ATK sekolah, kantor, kertas, pulpen, map, dan lainnya."],
    ["💬", "Order Mudah", "Checkout langsung via WhatsApp."],
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-5 md:grid-cols-4">
          {benefits.map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-2xl">
                {icon}
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-900">
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