import { WHATSAPP_NUMBER } from "../utils/helpers";

export default function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Gemilang%20Maju%20Bersama%20Grosir,%20saya%20ingin%20bertanya%20produk.`;

  return (
    <footer id="kontak" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black">
              Gemilang Maju Bersama Grosir
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Supplier alat tulis sekolah dan kantor dengan harga grosir,
              produk original, dan layanan cepat via WhatsApp.
            </p>
          </div>

          <div>
            <p className="font-black">Menu</p>

            <div className="mt-4 space-y-3 text-slate-400">
              <a href="#beranda" className="block hover:text-white">Beranda</a>
              <a href="#produk" className="block hover:text-white">Produk</a>
              <a href="#kategori" className="block hover:text-white">Kategori</a>
              <a href="#testimoni" className="block hover:text-white">Testimoni</a>
            </div>
          </div>

          <div>
            <p className="font-black">Layanan</p>

            <div className="mt-4 space-y-3 text-slate-400">
              <p>Harga Grosir</p>
              <p>Order via WhatsApp</p>
              <p>Reseller & Toko ATK</p>
              <p>Kebutuhan Sekolah & Kantor</p>
            </div>
          </div>

          <div>
            <p className="font-black">Kontak</p>

            <div className="mt-4 space-y-3 text-slate-400">
              <p>📍 Surabaya</p>
              <p>🕘 Senin - Sabtu</p>
              <p>💬 Fast response via WhatsApp</p>
            </div>

            <a
              href={waLink}
              target="_blank"
              className="mt-5 inline-block rounded-2xl bg-green-500 px-6 py-4 font-black text-white shadow-lg hover:bg-green-600"
            >
              💬 Hubungi Admin
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Gemilang Maju Bersama Grosir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}