export default function Header({
  search,
  setSearch,
  totalQty,
  openCart,
  openMember,
}) {
  const menus = [
    { label: "Beranda", href: "#beranda" },
    { label: "Produk", href: "#produk" },
    { label: "Kategori", href: "#kategori" },
    { label: "Tentang Kami", href: "#testimoni" },
    { label: "Cara Order", href: "#produk" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 overflow-hidden bg-blue-700 text-white shadow-xl">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white/80 bg-white/10 text-lg font-black">
              GMB
            </div>

            <div>
              <h1 className="text-lg font-black leading-tight">
                GEMILANG MAJU BERSAMA
              </h1>
              <p className="text-sm font-bold text-blue-100">GROSIR</p>
            </div>
          </div>

          <div className="hidden flex-1 md:block">
            <div className="mx-auto flex max-w-xl overflow-hidden rounded-full bg-white p-1 shadow-xl">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari produk JOYKO..."
                className="flex-1 rounded-full px-5 py-3 font-bold text-slate-700 outline-none"
              />

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl">
                🔍
              </button>
            </div>
          </div>

          <button
            onClick={openMember}
            className="hidden rounded-full bg-green-500 px-6 py-3 font-black text-white shadow-lg hover:bg-green-600 lg:block"
          >
            💬 Hubungi Admin
          </button>

          <button
            onClick={openCart}
            className="rounded-full bg-white px-5 py-3 font-black text-slate-900 shadow-lg"
          >
            🛒 Keranjang{" "}
            <span className="ml-2 rounded-full bg-blue-700 px-2 py-1 text-xs text-white">
              {totalQty}
            </span>
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 bg-blue-800/80">
        <div className="mx-auto flex max-w-5xl justify-center gap-2 overflow-x-auto px-4 py-2">
          {menus.map((menu) => (
            <a
              key={menu.label}
              href={menu.href}
              className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-black text-blue-50 transition hover:bg-white hover:text-blue-700"
            >
              {menu.label}
            </a>
          ))}
        </div>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari produk..."
          className="w-full rounded-full px-5 py-3 font-bold text-slate-700 outline-none"
        />
      </div>
    </header>
  );
}