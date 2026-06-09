import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  categories,
  activeCategory,
  setCategory,
  sort,
  setSort,
  openModal,
}) {
  return (
    <section id="produk" className="bg-slate-50 px-4 py-14">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="font-black uppercase tracking-widest text-blue-700">
              Katalog Produk
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-950">
              Produk Pilihan
            </h2>

            <p className="mt-2 text-slate-500">
              Produk alat tulis sekolah dan kantor dengan harga grosir.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-5 py-4 shadow-lg">
            <span className="text-lg font-black text-blue-700">
              {products.length}
            </span>
            <span className="ml-2 text-slate-500">
              Produk Ditemukan
            </span>
          </div>

        </div>

        {/* FILTER */}

        <div className="mb-8 rounded-[28px] bg-white p-4 shadow-lg">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex gap-3 overflow-x-auto">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategory(category)}
                  className={`whitespace-nowrap rounded-2xl px-5 py-3 font-black transition ${
                    activeCategory === category
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </button>
              ))}

            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black outline-none"
            >
              <option value="default">Urutkan Produk</option>
              <option value="price-low">Harga Terendah</option>
              <option value="price-high">Harga Tertinggi</option>
              <option value="stock-high">Stok Terbanyak</option>
            </select>

          </div>

        </div>

        {/* GRID */}

        {products.length === 0 ? (
          <div className="rounded-[32px] bg-white p-16 text-center shadow-lg">
            <p className="text-6xl">🔎</p>

            <h3 className="mt-4 text-2xl font-black">
              Produk Tidak Ditemukan
            </h3>

            <p className="mt-2 text-slate-500">
              Coba gunakan kata kunci lain.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                openModal={openModal}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}