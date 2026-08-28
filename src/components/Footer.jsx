import { WHATSAPP_NUMBER } from "../utils/helpers";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 text-slate-800"
    >
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute left-20 bottom-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16">

        {/* CTA BANNER */}

        <div className="mb-12 rounded-[36px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-10 shadow-2xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-4xl font-black tracking-tight text-slate-900">
                Siap Order Produk ATK?
              </h2>

              <p className="mt-3 text-slate-600">
                Hubungi admin sekarang untuk mendapatkan harga grosir terbaik,
                informasi stok terbaru dan penawaran khusus reseller.
              </p>

            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-700
              to-blue-600
              px-8
              py-4
              font-black
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
              "
            >
              💬 Chat WhatsApp
            </a>

          </div>

        </div>

        {/* FOOTER CONTENT */}

        <div className="grid gap-10 md:grid-cols-4">

          <div>

            <h3 className="text-2xl font-black text-slate-950">
              Gemilang Maju Bersama
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Supplier alat tulis sekolah dan kantor dengan harga grosir,
              produk original dan pelayanan cepat untuk toko, reseller,
              sekolah dan kebutuhan perusahaan.
            </p>

          </div>

          <div>

            <h4 className="font-black text-slate-950">
              Menu
            </h4>

            <div className="mt-4 space-y-3 text-slate-600">

              <a href="#beranda" className="block hover:text-blue-700">
                Beranda
              </a>

              <a href="#produk" className="block hover:text-blue-700">
                Produk
              </a>

              <a href="#kontak" className="block hover:text-blue-700">
                Kontak
              </a>

            </div>

          </div>

          <div>

            <h4 className="font-black text-slate-950">
              Layanan
            </h4>

            <div className="mt-4 space-y-3 text-slate-600">

              <p>Harga Grosir</p>
              <p>Pengiriman Cepat</p>
              <p>Produk Original</p>
              <p>Fast Response</p>

            </div>

          </div>

          <div>

            <h4 className="font-black text-slate-950">
              Hubungi Kami
            </h4>

            <div className="mt-4 space-y-3 text-slate-600">

              <p>📍 Surabaya</p>
              <p>💬 WhatsApp</p>
              <p>🕘 Senin - Sabtu</p>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-600">
          © 2026 Gemilang Maju Bersama Grosir
        </div>

      </div>
    </footer>
  );
}