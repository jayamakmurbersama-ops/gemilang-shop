export default function Testimonials() {
  const testimonials = [
    ["Budi Santoso", "Admin Kantor", "Produk lengkap, respon cepat, cocok untuk kebutuhan kantor bulanan."],
    ["Sinta Wijaya", "Pemilik Toko", "Harga grosir menarik, packing rapi, dan proses order mudah."],
    ["Andi Pratama", "Reseller ATK", "Belanja ATK jadi praktis. Pilih produk lalu checkout via WhatsApp."],
  ];

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-slate-50/70 to-white/40"></div>

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="font-black uppercase tracking-widest text-blue-700">
            Testimoni
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Dipercaya Pelanggan
          </h2>

          <p className="mt-3 text-slate-500">
            Review dari pelanggan kantor, sekolah, toko, dan reseller.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(([name, role, text]) => (
            <div
              key={name}
              className="rounded-[28px] border border-white/70 bg-white/70 p-7 shadow-xl shadow-blue-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/90 hover:shadow-2xl"
            >
              <p className="text-xl text-amber-400">★★★★★</p>

              <p className="mt-4 leading-7 text-slate-600">
                “{text}”
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-black text-slate-900">{name}</p>
                <p className="text-sm text-slate-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}