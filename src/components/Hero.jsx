export default function Hero() {
  const stats = [
    {
      icon: "box",
      title: "100+",
      desc: "Produk",
    },
    {
      icon: "bolt",
      title: "Fast",
      desc: "Respon",
    },
    {
      icon: "wa",
      title: "WA",
      desc: "Checkout",
    },
  ];

  const Icon = ({ type }) => {
    if (type === "box") {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-blue-700">
          <path d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2Zm0 2.2 6.1 3.05L12 10.3 5.9 7.25 12 4.2ZM5 8.9l6 3v7.55l-6-3V8.9Zm8 10.55V11.9l6-3v7.55l-6 3Z" />
        </svg>
      );
    }

    if (type === "bolt") {
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-amber-400">
          <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-green-500">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.34 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.77 14.16c-.24.68-1.4 1.3-1.96 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.59-.36.79-.36h.57c.18.01.43-.07.67.51.24.58.82 2.01.89 2.16.07.15.12.34.02.53-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.23 1.6 1.99 1.1.98 2.03 1.28 2.32 1.43.29.15.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.15.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.12.07.7-.17 1.38Z" />
      </svg>
    );
  };

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white"
    >
      <div className="absolute right-8 top-28 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute right-10 bottom-20 hidden opacity-30 lg:block">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>
      </div>

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
              💬 Hubungi Admin
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {stats.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-3xl bg-white/10 p-4 backdrop-blur"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-xl">
                  <Icon type={item.icon} />
                </div>

                <div>
                  <p className="text-3xl font-black">{item.title}</p>
                  <p className="text-sm text-blue-100">{item.desc}</p>
                </div>
              </div>
            ))}
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