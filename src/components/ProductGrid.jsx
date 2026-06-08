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
    <section id="produk" className="relative overflow-hidden px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200"></div>
      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 rounded-[32px] bg-white/75 p-6 text-center shadow-xl backdrop-blur-xl">
          <p className="font-black uppercase tracking-widest text-blue-700">
            Produk Pilihan
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-950 md:text-5xl">
            Katalog Grosir Joyko
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Produk original Joyko untuk kebutuhan sekolah, kantor, toko, dan
            reseller. Klik produk untuk melihat detail atau langsung tanya harga.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            id="kategori"
            className="flex gap-3 overflow-x-auto rounded-3xl bg-white/75 p-3 shadow-lg backdrop-blur-xl"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategory(category)}
                className={`whitespace-nowrap rounded-2xl px-5 py-3 font-black transition ${
                  activeCategory === category
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl bg-white/80 px-5 py-3 font-black text-blue-700 shadow-lg">
              {products.length} Produk
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-2xl border border-blue-100 bg-white/90 px-5 py-3 font-black text-slate-700 shadow-lg outline-none"
            >
              <option value="default">Urutkan</option>
              <option value="price-low">Harga Termurah</option>
              <option value="price-high">Harga Termahal</option>
              <option value="stock-high">Stok Terbanyak</option>
            </select>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="rounded-[32px] bg-white p-12 text-center shadow-xl">
            <p className="text-5xl">🔎</p>
            <h3 className="mt-4 text-2xl font-black">Produk tidak ditemukan</h3>
            <p className="mt-2 text-slate-500">
              Coba kata kunci lain atau pilih kategori berbeda.
            </p>
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