export default function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-black">
            Gemilang Maju Bersama Grosir
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Supplier alat tulis kantor dan sekolah dengan harga grosir,
            produk lengkap, dan layanan cepat via WhatsApp.
          </p>
        </div>

        <div>
          <h4 className="font-black">Menu</h4>

          <div className="mt-4 flex flex-col gap-3 text-slate-400">
            <a href="#beranda">Beranda</a>
            <a href="#produk">Produk</a>
            <a href="#kategori">Kategori</a>
            <a href="#testimoni">Testimoni</a>
          </div>
        </div>

        <div>
          <h4 className="font-black">Layanan</h4>

          <div className="mt-4 flex flex-col gap-3 text-slate-400">
            <p>Harga Grosir</p>
            <p>Order via WhatsApp</p>
            <p>Member Reseller</p>
            <p>Kebutuhan Sekolah & Kantor</p>
          </div>
        </div>

        <div>
          <h4 className="font-black">Kontak</h4>

          <div className="mt-4 flex flex-col gap-3 text-slate-400">
            <p>Surabaya</p>
            <p>WhatsApp Admin</p>
            <p>Senin - Sabtu</p>
          </div>

          <a
            href="https://wa.me/628123456789"
            className="mt-5 inline-block rounded-2xl bg-blue-700 px-5 py-3 font-black text-white shadow-lg hover:bg-blue-800"
          >
            Hubungi Admin
          </a>
        </div>
      </div>

      <div className="relative border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 Gemilang Maju Bersama Grosir. All rights reserved.
      </div>
    </footer>
  );
}