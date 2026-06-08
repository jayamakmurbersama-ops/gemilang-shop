export default function Footer() {
  return (
    <footer
      id="kontak"
      className="
      relative
      overflow-hidden
      bg-slate-950
      text-white
    "
    >

      <div className="mx-auto max-w-7xl px-4 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>

            <h3 className="text-2xl font-black">
              Gemilang Maju Bersama
            </h3>

            <p className="mt-4 text-slate-400">
              Supplier alat tulis sekolah dan kantor
              dengan harga grosir terbaik.
            </p>

          </div>

          <div>
            <p className="font-black">
              Menu
            </p>

            <div className="mt-4 space-y-2 text-slate-400">

              <a href="#beranda" className="block">
                Beranda
              </a>

              <a href="#produk" className="block">
                Produk
              </a>

              <a href="#kontak" className="block">
                Kontak
              </a>

            </div>
          </div>

          <div>

            <p className="font-black">
              Layanan
            </p>

            <div className="mt-4 space-y-2 text-slate-400">

              <p>Harga Grosir</p>
              <p>Reseller</p>
              <p>Order WA</p>

            </div>

          </div>

          <div>

            <a
              href="https://wa.me/"
              className="
              inline-block
              rounded-2xl
              bg-blue-700
              px-6
              py-4
              font-black
            "
            >
              Hubungi Admin
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">

          © 2026 Gemilang Maju Bersama

        </div>

      </div>

    </footer>
  );
}