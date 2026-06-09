export default function Hero() {
  const stats = [
    ["📦", "100+", "Produk"],
    ["⚡", "Fast", "Respon"],
    ["💬", "WA", "Checkout"],
  ];

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white"
    >
      <div className="absolute right-12 bottom-24 hidden opacity-35 lg:block">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 144 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1380px] gap-12 px-8 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-[640px]">
          <div className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-black backdrop-blur">
            ⭐ Supplier ATK Sekolah & Kantor
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight xl:text-7xl">
            Grosir ATK
            <br />
            Modern,
            <br />
            Cepat & Lengkap
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
            Produk alat tulis sekolah, kantor, reseller, dan kebutuhan bisnis
            dengan proses order cepat langsung via WhatsApp.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#produk"
              className="rounded-2xl bg-white px-9 py-4 font-black text-blue-700 shadow-xl"
            >
              Lihat Produk
            </a>

            <a
              href="#kontak"
              className="rounded-2xl border border-white/50 bg-white/10 px-9 py-4 font-black text-white backdrop-blur"
            >
              💬 Hubungi Admin
            </a>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-3 gap-4">
            {stats.map(([icon, title, desc]) => (
              <div
                key={title}
                className="flex min-h-[118px] items-center gap-4 rounded-[28px] border border-white/10 bg-white/10 px-5 py-5 shadow-lg backdrop-blur"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-3xl shadow-xl">
                  {icon}
                </div>

                <div>
                  <p className="text-3xl font-black leading-none">{title}</p>
                  <p className="mt-1 text-base text-blue-100">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-end">
          <div className="w-full max-w-[640px] rounded-[34px] bg-white p-4 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop"
              alt="Alat tulis kantor dan sekolah"
              className="h-[500px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}