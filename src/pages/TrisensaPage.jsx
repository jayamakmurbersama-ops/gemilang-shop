import { useEffect } from "react";
import { WHATSAPP_NUMBER } from "../utils/helpers";

export default function TrisensaPage() {
  useEffect(() => {
    document.title =
      "Kapur Tulis Trisensa Surabaya | Kapur Trisensa Grosir | Gemilang Maju Bersama";
  }, []);

  const openWhatsApp = () => {
    const message =
      "Halo Gemilang Maju Bersama,\n\n" +
      "Saya ingin tanya Kapur Tulis Trisensa.\n\n" +
      "Mohon info:\n" +
      "- Harga grosir\n" +
      "- Stok putih / warna\n" +
      "- Minimal order\n" +
      "- Isi per box / dos\n" +
      "- Ongkir / pengiriman\n\n" +
      "Terima kasih.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const benefits = [
    {
      icon: "📦",
      title: "Stok Grosir",
      desc: "Melayani pembelian box, dos, dan kebutuhan jumlah besar.",
    },
    {
      icon: "🏫",
      title: "Untuk Sekolah",
      desc: "Cocok untuk sekolah, lembaga pendidikan, toko, dan reseller.",
    },
    {
      icon: "🚚",
      title: "Pengiriman",
      desc: "Melayani Surabaya dan pengiriman ke berbagai kota di Indonesia.",
    },
    {
      icon: "💬",
      title: "Fast Response",
      desc: "Cek harga, stok, dan minimal order langsung melalui WhatsApp.",
    },
  ];

  const variants = [
    {
      title: "Trisensa Putih",
      badge: "Kapur Tulis Putih",
      desc: "Pilihan untuk kebutuhan sekolah, kantor, toko alat tulis, reseller, dan pengadaan.",
      icon: "⚪",
    },
    {
      title: "Trisensa Warna",
      badge: "Kapur Tulis Warna",
      desc: "Varian warna untuk kebutuhan sekolah, pembelajaran, dan penjualan kembali.",
      icon: "🌈",
    },
    {
      title: "Kemasan Grosir",
      badge: "Box / Dos / Karton",
      desc: "Tersedia untuk pembelian grosir sesuai ketersediaan stok dan jumlah pemesanan.",
      icon: "📦",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="block">
            <p className="text-xl font-black text-blue-700">
              Gemilang Maju Bersama
            </p>

            <p className="text-xs font-semibold text-slate-500">
              Grosir ATK Surabaya
            </p>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-2xl px-5 py-3 font-black text-slate-600 transition hover:bg-slate-100 md:inline-flex"
            >
              ← Beranda
            </a>

            <button
              onClick={openWhatsApp}
              className="rounded-2xl bg-green-500 px-5 py-3 font-black text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
            >
              💬 Tanya Harga
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white">
          <div className="absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
            <div>
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-black backdrop-blur">
                ⭐ Grosir Kapur Tulis Trisensa Surabaya
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[1.03] tracking-tight md:text-6xl lg:text-7xl">
                Kapur Tulis
                <br />
                Trisensa
                <br />
                Harga Grosir
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Gemilang Maju Bersama melayani Kapur Trisensa putih dan warna
                untuk toko alat tulis, reseller, sekolah, kantor, perusahaan,
                dan kebutuhan pengadaan.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={openWhatsApp}
                  className="rounded-2xl bg-white px-8 py-4 font-black text-blue-700 shadow-xl transition hover:scale-105"
                >
                  💬 Tanya Harga Grosir
                </button>

                <a
                  href="#produk-trisensa"
                  className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  Lihat Produk
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-50">
                  ✓ Kapur Trisensa Putih
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-50">
                  ✓ Kapur Trisensa Warna
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-50">
                  ✓ Grosir Box / Dos
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[38px] bg-white p-4 shadow-2xl">
                <div className="overflow-hidden rounded-[30px] bg-slate-100">
                  <img
                    src="/images/trisensa-grosir.png"
                    alt="Kapur Tulis Trisensa putih, warna, dan stok grosir Surabaya"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 left-6 rounded-2xl bg-orange-500 px-5 py-3 font-black text-white shadow-xl">
                Stok Grosir • Putih & Warna
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {item.icon}
                </div>

                <h2 className="mt-4 text-xl font-black">
                  {item.title}
                </h2>

                <p className="mt-2 leading-7 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="produk-trisensa"
          className="bg-slate-50 px-4 py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-black uppercase tracking-[0.2em] text-blue-700">
                Produk Trisensa
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Kapur Trisensa Putih & Warna
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Tersedia untuk kebutuhan eceran tertentu maupun pembelian
                grosir sesuai stok dan minimal pemesanan.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {variants.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl"
                >
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 text-7xl">
                    {item.icon}
                  </div>

                  <div className="p-6">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
                      {item.badge}
                    </span>

                    <h3 className="mt-4 text-2xl font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.desc}
                    </p>

                    <button
                      onClick={openWhatsApp}
                      className="mt-6 w-full rounded-2xl bg-green-500 py-3 font-black text-white shadow-lg transition hover:bg-green-600"
                    >
                      💬 Tanya Harga
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-[34px] bg-white p-8 shadow-xl ring-1 ring-slate-100">
              <p className="font-black uppercase tracking-[0.18em] text-blue-700">
                Grosir Kapur Trisensa
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Supplier Kapur Tulis Trisensa Surabaya
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Gemilang Maju Bersama melayani kebutuhan Kapur Tulis
                  Trisensa untuk toko alat tulis, reseller, sekolah,
                  kantor, perusahaan, dan kebutuhan pengadaan.
                </p>

                <p>
                  Tersedia pilihan Kapur Trisensa putih dan Kapur Trisensa
                  warna. Untuk informasi stok, isi kemasan, minimal order,
                  dan harga grosir terbaru, pelanggan dapat langsung
                  menghubungi admin melalui WhatsApp.
                </p>

                <p>
                  Sebagai Grosir ATK Surabaya dan Supplier ATK Sby,
                  pemesanan Kapur Trisensa juga dapat digabungkan dengan
                  berbagai kebutuhan alat tulis sekolah dan kantor lainnya.
                </p>
              </div>
            </div>

            <div className="rounded-[34px] bg-gradient-to-br from-blue-800 to-blue-600 p-8 text-white shadow-xl">
              <p className="font-black uppercase tracking-[0.18em] text-blue-100">
                Pelanggan Grosir
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Cocok untuk Berbagai Kebutuhan
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Toko Alat Tulis",
                  "Reseller",
                  "Sekolah",
                  "Kantor",
                  "Perusahaan",
                  "Pengadaan",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-black backdrop-blur"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <button
                onClick={openWhatsApp}
                className="mt-8 w-full rounded-2xl bg-white py-4 font-black text-blue-700 shadow-xl transition hover:scale-[1.02]"
              >
                💬 Minta Penawaran Grosir
              </button>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="font-black uppercase tracking-[0.18em] text-blue-700">
                FAQ
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Pertanyaan Kapur Tulis Trisensa
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-black">
                  Apakah tersedia Trisensa putih dan warna?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Tersedia pilihan putih dan warna sesuai kondisi stok.
                  Silakan hubungi admin untuk memastikan ketersediaan terbaru.
                </p>
              </div>

              <div className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-black">
                  Apakah Kapur Trisensa bisa dibeli secara grosir?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Ya. Gemilang Maju Bersama melayani pembelian grosir.
                  Harga dapat menyesuaikan jumlah pembelian, kemasan,
                  dan stok.
                </p>
              </div>

              <div className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-black">
                  Apakah bisa dikirim ke luar Surabaya?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Bisa. Pengiriman dapat dilakukan ke berbagai kota melalui
                  ekspedisi sesuai jenis dan jumlah barang.
                </p>
              </div>

              <div className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-black">
                  Apakah bisa digabung dengan produk ATK lain?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Bisa. Kapur Tulis Trisensa dapat dipesan bersama berbagai
                  kebutuhan alat tulis sekolah dan kantor lainnya.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-7xl rounded-[38px] bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-10 shadow-xl ring-1 ring-blue-100">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-4xl font-black text-slate-950">
                  Butuh Kapur Tulis Trisensa?
                </p>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Hubungi admin untuk cek stok putih / warna, harga grosir,
                  minimal order, isi kemasan, serta pengiriman.
                </p>
              </div>

              <button
                onClick={openWhatsApp}
                className="shrink-0 rounded-2xl bg-green-500 px-8 py-4 font-black text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
              >
                💬 Chat WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xl font-black text-slate-950">
                Gemilang Maju Bersama
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Grosir ATK Surabaya • Supplier ATK Sby • Kapur Tulis Trisensa
              </p>
            </div>

            <a
              href="/"
              className="font-black text-blue-700 hover:text-blue-800"
            >
              Kembali ke Beranda →
            </a>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            © 2026 Gemilang Maju Bersama
          </div>
        </div>
      </footer>

      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl transition hover:scale-105 hover:bg-green-600"
      >
        💬 <span className="hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  );
}