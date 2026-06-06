export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#3b82f6_0,#1d4ed8_35%,#0f172a_100%)]"
    >
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"></div>
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black shadow-lg backdrop-blur">
            <span>✨</span>
            <span>Grosir ATK Sekolah & Kantor</span>
          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Belanja ATK Jadi Lebih Cepat, Rapi & Modern
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Gemilang Maju Bersama Grosir menyediakan produk alat tulis untuk
            sekolah, kantor, reseller, dan toko dengan katalog yang mudah
            dicari dan checkout cepat via WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#produk"
              className="rounded-2xl bg-white px-7 py-4 font-black text-blue-700 shadow-2xl transition hover:-translate-y-1 hover:shadow-white/20"
            >
              Lihat Produk
            </a>

            <a
              href="#kontak"
              className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
            >
              Hubungi Admin
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur">
              <p className="text-3xl font-black">100+</p>
              <p className="mt-1 text-sm text-blue-100">Produk Awal</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur">
              <p className="text-3xl font-black">Grosir</p>
              <p className="mt-1 text-sm text-blue-100">Harga Khusus</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur">
              <p className="text-3xl font-black">WA</p>
              <p className="mt-1 text-sm text-blue-100">Order Cepat</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-3xl bg-amber-300/80 blur-xl"></div>

          <div className="relative rounded-[42px] border border-white/30 bg-white/15 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[34px] bg-white p-5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt="Katalog alat tulis"
                className="h-[420px] w-full rounded-[28px] object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 rounded-3xl bg-amber-400 px-6 py-4 font-black text-slate-950 shadow-2xl">
            Sekolah • Kantor • Reseller
          </div>

          <div className="absolute -right-2 bottom-12 hidden rounded-3xl bg-white px-5 py-4 shadow-2xl md:block">
            <p className="text-sm font-bold text-slate-500">Checkout</p>
            <p className="text-xl font-black text-blue-700">Via WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}