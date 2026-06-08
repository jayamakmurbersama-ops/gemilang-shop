export default function Header({
  search,
  setSearch,
  totalQty,
  openCart,
  openMember,
}) {
  const menus = [
    { label: "Produk", href: "#produk" },
    { label: "Kategori", href: "#kategori" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-blue-700 shadow-xl">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 py-3">

          <div className="flex items-center justify-between gap-3">

            <div className="min-w-0">
              <h1 className="truncate text-lg font-black text-white md:text-2xl">
                GEMILANG MAJU BERSAMA
              </h1>

              <p className="text-xs font-bold text-blue-100 md:text-sm">
                Grosir ATK Sekolah & Kantor
              </p>
            </div>

            <div className="flex items-center gap-2">

              <button
                onClick={openMember}
                className="hidden rounded-full bg-green-500 px-4 py-2 text-sm font-black text-white md:block"
              >
                Admin
              </button>

              <button
                onClick={openCart}
                className="relative rounded-full bg-white px-4 py-3 font-black text-slate-900 shadow-lg"
              >
                🛒

                {totalQty > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {totalQty}
                  </span>
                )}
              </button>

            </div>

          </div>

          <div className="mt-3 flex gap-3">

            <div className="flex flex-1 overflow-hidden rounded-full bg-white shadow-lg">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari produk Joyko..."
                className="w-full px-5 py-3 font-bold text-slate-700 outline-none"
              />

              <div className="flex w-14 items-center justify-center bg-blue-700 text-white">
                🔍
              </div>
            </div>

          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {menus.map((menu) => (
              <a
                key={menu.label}
                href={menu.href}
                className="whitespace-nowrap rounded-full bg-blue-800 px-4 py-2 text-sm font-black text-white"
              >
                {menu.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
}