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

  const displayPrice =
    product.wholesalePrice && product.wholesalePrice > 0
      ? formatCurrency(product.wholesalePrice)
      : "Hubungi Admin";

  return (
    <div
      onClick={() => openModal(product)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50 p-5">
        <div className="absolute left-3 top-3 rounded-full bg-blue-700 px-3 py-1 text-xs font-black text-white shadow-lg">
          {product.badge}
        </div>

        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-600 shadow">
          {product.brand}
        </div>

        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/600x600?text=No+Image";
          }}
          className="mx-auto h-full max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-black uppercase tracking-wide text-blue-700">
          {product.category}
        </p>

        <h3 className="mt-2 min-h-[52px] font-black leading-snug text-slate-900">
          {product.name}
        </h3>

        <div className="mt-4 rounded-2xl bg-slate-50 p-3">
          {product.price > 0 && (
            <p className="text-xs text-slate-400 line-through">
              Retail {formatCurrency(product.price)}
            </p>
          )}

          <p className="text-xl font-black text-blue-700">{displayPrice}</p>

          <p className="text-xs font-bold text-slate-500">
            Harga grosir / info stok
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
          {product.stock > 0 && product.wholesalePrice > 0 ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="w-full rounded-2xl bg-blue-700 py-3 font-black text-white transition hover:bg-blue-800"
            >
              + Tambah
            </button>
          ) : (
            <button
              onClick={openWA}
              className="w-full rounded-2xl bg-green-500 py-3 font-black text-white transition hover:bg-green-600"
            >
              Tanya Harga
            </button>
          )}

          {product.stock < 20 && (
            <button
              onClick={openWA}
              className="w-full rounded-2xl border border-green-500 py-3 font-black text-green-600 transition hover:bg-green-50"
            >
              Hubungi WA
            </button>
          )}
        </div>
      </div>
    </div>
  );
}