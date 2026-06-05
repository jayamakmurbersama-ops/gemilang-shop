import { formatCurrency, WHATSAPP_NUMBER, getStockInfo } from "../utils/helpers";

export default function ProductCard({ product, addToCart, openModal }) {
  const stock = getStockInfo(product.stock);

  const openWA = (e) => {
    e.stopPropagation();

    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya tertarik produk:%0A` +
      `${product.name}%0A%0A` +
      `Mohon info ketersediaannya ya.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div
      onClick={() => openModal(product)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 p-5">
        <div className="absolute left-3 top-3 rounded-full bg-blue-700 px-3 py-1 text-xs font-black text-white">
          {product.badge}
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-full max-w-full object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-black uppercase text-blue-700">
          {product.category} • {product.brand}
        </p>

        <h3 className="mt-2 min-h-[48px] font-black leading-snug text-slate-800">
          {product.name}
        </h3>

        <div className="mt-3">
          <p className="text-xs text-slate-400 line-through">
            Retail {formatCurrency(product.price)}
          </p>

          <p className="text-xl font-black text-blue-700">
            {formatCurrency(product.wholesalePrice)}
          </p>

          <p className="text-xs font-bold text-slate-500">
            Harga grosir mulai dari
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">
            MOQ {product.moq}
          </span>

          <span className={`text-xs font-black ${stock.color}`}>
            ● {stock.text}
          </span>
        </div>

        <div className="mt-auto space-y-2 pt-4">
          {product.stock > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="w-full rounded-xl bg-blue-700 py-3 font-black text-white transition hover:bg-blue-800"
            >
              + Tambah
            </button>
          )}

          {product.stock < 20 && (
            <button
              onClick={openWA}
              className="w-full rounded-xl border border-green-500 py-3 font-black text-green-600 transition hover:bg-green-50"
            >
              Hubungi WA
            </button>
          )}
        </div>
      </div>
    </div>
  );
}