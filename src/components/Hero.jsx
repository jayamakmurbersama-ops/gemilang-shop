export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white"
    >
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-black backdrop-blur">
            ⭐ Supplier ATK Sekolah & Kantor
          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Grosir ATK Modern,
            <br />
            Cepat & Lengkap
          </h1>

          <p className="mt-6 max-w-xl text-lg text-blue-100">
            Produk alat tulis sekolah, kantor, reseller, dan kebutuhan bisnis
            dengan proses order cepat langsung via WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#produk"
              className="rounded-2xl bg-white px-8 py-4 font-black text-blue-700 shadow-xl"
            >
              Lihat Produk
            </a>

            <a
              href="#kontak"
              className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-black text-white backdrop-blur"
            >
              Hubungi Admin
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <div className="flex items-center gap-3 rounded-3xl bg-white/10 p-4 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                📦
              </div>
              <div>
                <p className="text-2xl font-black">100+</p>
                <p className="text-sm text-blue-100">Produk</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-3xl bg-white/10 p-4 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                ⚡
              </div>
              <div>
                <p className="text-2xl font-black">Fast</p>
                <p className="text-sm text-blue-100">Respon</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-3xl bg-white/10 p-4 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                💬
              </div>
              <div>
                <p className="text-2xl font-black">WA</p>
                <p className="text-sm text-blue-100">Checkout</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[36px] bg-white p-4 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop"
              alt="Alat tulis kantor dan sekolah"
              className="h-[450px] w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}