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
    <section id="produk" className="relative overflow-hidden px-4 py-14">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200"></div>

      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"></div>
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 font-black text-blue-700 shadow-sm">
            ⭐ PRODUK UNGGULAN
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Produk Correction Fluid{" "}
            <span className="text-blue-700">Joyko</span>
          </h2>

          <p className="mt-3 text-lg font-bold text-slate-500">
            Correction fluid berkualitas untuk kebutuhan sekolah, kantor, dan
            bisnis Anda
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div
            id="kategori"
            className="flex gap-3 overflow-x-auto rounded-3xl bg-white/70 p-3 shadow-sm backdrop-blur"
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

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-2xl border border-blue-100 bg-white/90 px-5 py-3 font-black text-slate-700 shadow-sm outline-none"
          >
            <option value="default">Urutkan: Default</option>
            <option value="price-low">Harga Termurah</option>
            <option value="price-high">Harga Termahal</option>
            <option value="stock-high">Stok Terbanyak</option>
          </select>
        </div>

        {products.length === 0 ? (
          <div className="rounded-[32px] bg-white p-12 text-center shadow-xl">
            <p className="text-5xl">🔎</p>
            <h3 className="mt-4 text-2xl font-black">Produk tidak ditemukan</h3>
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

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 rounded-[28px] bg-white/80 p-5 shadow-xl backdrop-blur md:grid-cols-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🛡️</div>
            <div>
              <p className="font-black">Produk Original</p>
              <p className="text-sm text-slate-500">100% Original JOYKO</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-4xl">🚚</div>
            <div>
              <p className="font-black">Pengiriman Cepat</p>
              <p className="text-sm text-slate-500">Aman & Terpercaya</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-4xl">🏅</div>
            <div>
              <p className="font-black">Harga Grosir</p>
              <p className="text-sm text-slate-500">Termurah & Kompetitif</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-4xl">🎧</div>
            <div>
              <p className="font-black">Layanan Admin</p>
              <p className="text-sm text-slate-500">Fast Respon 24 Jam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}