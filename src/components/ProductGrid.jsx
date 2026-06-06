import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  categories,
  activeCategory,
  setCategory,
  sort,
  setSort,
  addToCart,
  openModal,
}) {
  return (
    <section
      id="produk"
      className="relative overflow-hidden px-4 py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-white/70 to-slate-100/80"></div>

      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
              Produk Pilihan
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Katalog Grosir ATK
            </h2>

            <p className="mt-4 max-w-2xl text-slate-500">
              Pilih produk Joyko dan kebutuhan ATK lainnya dengan tampilan katalog
              yang rapi, cepat dicari, dan siap order via WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="rounded-2xl bg-white/90 px-5 py-3 font-black text-blue-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
              {products.length} Produk
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 font-black text-slate-700 shadow-sm outline-none backdrop-blur focus:ring-4 focus:ring-blue-100"
            >
              <option value="default">Urutkan: Default</option>
              <option value="price-low">Harga Termurah</option>
              <option value="price-high">Harga Termahal</option>
              <option value="stock-high">Stok Terbanyak</option>
            </select>
          </div>
        </div>

        <div
          id="kategori"
          className="mb-10 flex gap-3 overflow-x-auto rounded-3xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-200 backdrop-blur"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategory(category)}
              className={`whitespace-nowrap rounded-2xl px-5 py-3 font-black transition ${
                activeCategory === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {products.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl">
              🔎
            </div>

            <h3 className="mt-5 text-2xl font-black text-slate-900">
              Produk tidak ditemukan
            </h3>

            <p className="mt-2 text-slate-500">
              Coba kata kunci lain atau pilih kategori berbeda.
            </p>

            <button
              onClick={() => setCategory("Semua")}
              className="mt-6 rounded-2xl bg-blue-700 px-6 py-3 font-black text-white"
            >
              Lihat Semua Produk
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                openModal={openModal}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}