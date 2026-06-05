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
    <section id="produk" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-black uppercase tracking-widest text-blue-700">
            Produk Pilihan
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Katalog Produk
          </h2>

          <p className="mt-3 max-w-xl text-slate-500">
            Produk sekolah, kantor, dan kebutuhan usaha dengan harga grosir terbaik.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="rounded-2xl bg-blue-50 px-5 py-3 font-black text-blue-700">
            {products.length} Produk
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black text-slate-700 outline-none focus:ring-4 focus:ring-blue-100"
          >
            <option value="default">Urutkan: Default</option>
            <option value="price-low">Harga Termurah</option>
            <option value="price-high">Harga Termahal</option>
            <option value="stock-high">Stok Terbanyak</option>
          </select>
        </div>
      </div>

      <div id="kategori" className="mb-10 flex gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className={`whitespace-nowrap rounded-full px-5 py-3 font-black transition ${
              activeCategory === category
                ? "bg-blue-700 text-white shadow-lg"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300"
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
    </section>
  );
}