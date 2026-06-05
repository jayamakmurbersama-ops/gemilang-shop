export default function Testimonials() {
  const testimonials = [
    ["Budi Santoso", "Admin Kantor", "Produk lengkap, respon cepat, cocok untuk kebutuhan kantor bulanan."],
    ["Sinta Wijaya", "Pemilik Toko", "Harga grosir menarik, packing rapi, dan proses order mudah."],
    ["Andi Pratama", "Reseller ATK", "Belanja ATK jadi praktis. Pilih produk lalu checkout via WhatsApp."],
  ];

  return (
    <section id="testimoni" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
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
              className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-xl text-amber-400">★★★★★</p>

              <p className="mt-4 leading-7 text-slate-600">
                “{text}”
              </p>

              <div className="mt-5 border-t pt-4">
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