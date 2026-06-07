import {
  formatCurrency,
  WHATSAPP_NUMBER,
  getStockInfo,
} from "../utils/helpers";

export default function ProductModal({ product, closeModal, addToCart }) {
  if (!product) return null;

  const stock = getStockInfo(product.stock);

  const displayPrice =
    product.wholesalePrice && product.wholesalePrice > 0
      ? formatCurrency(product.wholesalePrice)
      : "Hubungi Admin";

  const contactWA = () => {
    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya tertarik produk:%0A` +
      `Nama: ${product.name}%0A` +
      `Kategori: ${product.category}%0A` +
      `Brand: ${product.brand}%0A` +
      `MOQ: ${product.moq}%0A` +
      `Status stok: ${stock.text}%0A%0A` +
      `Mohon info harga grosir dan ketersediaannya ya.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setTimeout(closeModal, 100);
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-md md:items-center md:p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[94vh] w-full max-w-6xl overflow-auto rounded-t-[34px] bg-white shadow-2xl md:rounded-[34px]"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 p-5 md:p-8">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-black shadow-lg"
            >
              ×
            </button>

            <div className="mb-4 flex gap-2">
              <span className="rounded-full bg-blue-700 px-4 py-1 text-xs font-black text-white">
                {product.badge || "JOYKO"}
              </span>

              <span className={`rounded-full bg-white px-4 py-1 text-xs font-black shadow ${stock.color}`}>
                ● {stock.text}
              </span>
            </div>

            <div className="flex h-[280px] items-center justify-center rounded-[26px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-inner md:h-[420px]">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x600?text=No+Image";
                }}
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="p-5 md:p-8">
            <p className="text-sm font-black uppercase tracking-widest text-blue-700">
              {product.category} • {product.brand}
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              {product.name}
            </h2>

            <div className="mt-5 rounded-3xl bg-blue-50 p-5">
              {product.price > 0 && (
                <p className="text-sm text-slate-400 line-through">
                  Retail {formatCurrency(product.price)}
                </p>
              )}

              <p className="text-3xl font-black text-blue-700 md:text-4xl">
                {displayPrice}
              </p>

              <p className="mt-1 font-bold text-slate-500">
                Harga grosir / informasi stok
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs font-bold text-slate-500">MOQ</p>
                <p className="font-black">{product.moq || "Hubungi admin"}</p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs font-bold text-slate-500">Stok</p>
                <p className={`font-black ${stock.color}`}>{stock.text}</p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs font-bold text-slate-500">Brand</p>
                <p className="font-black">{product.brand}</p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs font-bold text-slate-500">Kategori</p>
                <p className="font-black">{product.category}</p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-200 p-5">
              <h3 className="font-black text-slate-900">Deskripsi Produk</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {product.description ||
                  "Produk original untuk kebutuhan sekolah, kantor, reseller, dan bisnis ATK."}
              </p>
            </div>

            <div className="sticky bottom-0 mt-6 flex flex-col gap-3 bg-white pb-1 pt-3 sm:flex-row">
              {product.stock > 0 && product.wholesalePrice > 0 && (
                <button
                  onClick={handleAddToCart}
                  className="flex-1 rounded-2xl bg-blue-700 px-7 py-4 font-black text-white shadow-lg"
                >
                  + Tambah Cart
                </button>
              )}

              <button
                onClick={contactWA}
                className="flex-1 rounded-2xl bg-green-500 px-7 py-4 font-black text-white shadow-lg"
              >
                💬 Tanya Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}