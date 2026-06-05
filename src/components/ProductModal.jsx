import {
  formatCurrency,
  WHATSAPP_NUMBER,
  getStockInfo,
} from "../utils/helpers";

export default function ProductModal({ product, closeModal, addToCart }) {
  if (!product) return null;

  const stock = getStockInfo(product.stock);

  const contactWA = () => {
    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya tertarik produk:%0A` +
      `Nama: ${product.name}%0A` +
      `Kategori: ${product.category}%0A` +
      `Brand: ${product.brand}%0A` +
      `MOQ: ${product.moq}%0A` +
      `Status stok: ${stock.text}%0A%0A` +
      `Mohon info harga dan ketersediaannya ya.`;

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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[28px] bg-white shadow-2xl"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeModal}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl font-black hover:bg-slate-200"
          >
            ×
          </button>
        </div>

        <div className="grid gap-7 p-6 pt-0 md:grid-cols-2 md:p-8 md:pt-0">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-slate-100 p-8">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-72 max-w-full object-contain"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-black text-white">
                {product.badge}
              </span>

              <span className={`rounded-full bg-slate-100 px-3 py-1 text-xs font-black ${stock.color}`}>
                ● {stock.text}
              </span>
            </div>

            <p className="mt-5 text-sm font-black uppercase text-blue-700">
              {product.category} • {product.brand}
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              {product.name}
            </h2>

            <div className="mt-5 rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-400 line-through">
                Retail {formatCurrency(product.price)}
              </p>

              <p className="mt-1 text-4xl font-black text-blue-700">
                {formatCurrency(product.wholesalePrice)}
              </p>

              <p className="mt-1 text-sm font-bold text-slate-500">
                Harga grosir mulai dari
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">MOQ</p>
                <p className="font-black">{product.moq}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Stok</p>
                <p className="font-black">{product.stock} pcs</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Brand</p>
                <p className="font-black">{product.brand}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Kategori</p>
                <p className="font-black">{product.category}</p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {product.stock > 0 && (
                <button
                  onClick={handleAddToCart}
                  className="rounded-2xl bg-blue-700 px-7 py-4 font-black text-white shadow-lg hover:bg-blue-800"
                >
                  Tambah Cart
                </button>
              )}

              <button
                onClick={contactWA}
                className="rounded-2xl border border-green-500 px-7 py-4 font-black text-green-600 hover:bg-green-50"
              >
                Hubungi WA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}