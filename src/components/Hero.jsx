export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-slate-900"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="text-white">
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black backdrop-blur">
            Grosir ATK Sekolah & Kantor
          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Belanja ATK Lebih Mudah & Cepat
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Gemilang Maju Bersama Grosir menyediakan kebutuhan alat tulis
            sekolah, kantor, toko, dan reseller dengan harga grosir.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#produk"
              className="rounded-2xl bg-white px-6 py-4 font-black text-blue-700 shadow-xl hover:scale-105"
            >
              Lihat Produk
            </a>

            <a
              href="#kontak"
              className="rounded-2xl border border-white/30 px-6 py-4 font-black text-white hover:bg-white/10"
            >
              Hubungi Admin
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black">100+</p>
              <p className="text-sm">Produk Awal</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black">Grosir</p>
              <p className="text-sm">Harga Khusus</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-2xl font-black">WA</p>
              <p className="text-sm">Order Cepat</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[40px] bg-white/95 p-6 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Alat tulis sekolah dan kantor"
              className="h-[360px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-3xl bg-amber-400 px-6 py-4 font-black text-slate-900 shadow-2xl">
            Sekolah • Kantor • Reseller
          </div>
        </div>
      </div>
    </section>
  );
}