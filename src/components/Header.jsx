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
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <div className="min-w-fit rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-2 text-white shadow-lg">
          <h1 className="text-lg font-black md:text-xl">
            Gemilang Maju Bersama
          </h1>
          <p className="text-[11px] text-blue-100">
            Grosir ATK Sekolah & Kantor
          </p>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {menus.map((menu) => (
            <a
              key={menu.label}
              href={menu.href}
              className="rounded-xl px-3 py-2 text-sm font-black text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {menu.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari produk..."
            className="w-full max-w-[230px] rounded-xl border border-white/80 bg-white/90 px-4 py-2 shadow-sm outline-none backdrop-blur focus:ring-4 focus:ring-blue-100"
          />

          <button
            onClick={openMember}
            className="hidden rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 font-black text-amber-700 shadow-sm hover:bg-amber-100 md:block"
          >
            Member
          </button>

          <button
            onClick={openCart}
            className="rounded-xl bg-blue-700 px-4 py-2 font-black text-white shadow-lg hover:bg-blue-800"
          >
            🛒 {totalQty}
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-white/70 bg-white/55 px-4 py-2 backdrop-blur-xl lg:hidden">
        {menus.map((menu) => (
          <a
            key={menu.label}
            href={menu.href}
            className="whitespace-nowrap rounded-full bg-white/85 px-4 py-2 text-sm font-black text-slate-600 shadow-sm"
          >
            {menu.label}
          </a>
        ))}
      </div>
    </header>
  );
}