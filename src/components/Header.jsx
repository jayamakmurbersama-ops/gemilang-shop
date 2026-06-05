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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <div className="min-w-fit">
          <h1 className="text-lg font-black text-slate-950 md:text-2xl">
            Gemilang Maju Bersama
          </h1>
          <p className="text-[11px] text-slate-500 md:text-xs">
            Grosir ATK Sekolah & Kantor
          </p>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {menus.map((menu) => (
            <a
              key={menu.label}
              href={menu.href}
              className="text-sm font-black text-slate-600 transition hover:text-blue-700"
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
            className="w-full max-w-[230px] rounded-xl border border-slate-200 px-4 py-2 outline-none focus:ring-4 focus:ring-blue-100"
          />

          <button
            onClick={openMember}
            className="hidden rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 font-black text-amber-700 md:block"
          >
            Member
          </button>

          <button
            onClick={openCart}
            className="rounded-xl bg-blue-700 px-4 py-2 font-black text-white"
          >
            🛒 {totalQty}
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t bg-slate-50 px-4 py-2 lg:hidden">
        {menus.map((menu) => (
          <a
            key={menu.label}
            href={menu.href}
            className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-black text-slate-600"
          >
            {menu.label}
          </a>
        ))}
      </div>
    </header>
  );
}