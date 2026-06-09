import { WHATSAPP_NUMBER, getStockInfo } from "../utils/helpers";

export default function ProductCard({ product, openModal }) {
  const stock = getStockInfo(product.stock);

  const openWA = (e) => {
    e.stopPropagation();

    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya tertarik produk:%0A` +
      `${product.name}%0A%0A` +
      `Mohon info harga grosir dan stoknya ya.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div
      onClick={() => openModal(product)}
      className="group cursor-pointer overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-black text-white shadow">
            {product.badge || "JOYKO"}
          </span>

          <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-black text-slate-700 shadow">
            {product.brand}
          </span>
        </div>

        <div className="flex h-44 items-center justify-center overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 shadow-inner">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/500x500?text=No+Image";
            }}
            className="h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="px-4 pb-5">
        <p className="text-xs font-black uppercase tracking-wide text-blue-700">
          {product.category}
        </p>

        <h3 className="mt-2 min-h-[54px] text-xl font-black leading-tight text-slate-950">
          {product.name}
        </h3>

        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-blue-50 px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm">
            🎧
          </div>

          <div>
            <p className="text-lg font-black text-blue-700">Hubungi Admin</p>
            <p className="text-xs font-bold text-slate-500">
              Harga grosir / info stok
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-700">
            MOQ {product.moq || "Hubungi admin"}
          </span>

          <span className={`text-xs font-black ${stock.color}`}>
            • {stock.text}
          </span>
        </div>

        <button
          onClick={openWA}
          className="mt-4 w-full rounded-2xl bg-green-500 py-3 font-black text-white shadow-lg transition hover:bg-green-600"
        >
          💬 Tanya Harga
        </button>
      </div>
    </div>
  );
}