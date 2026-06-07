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
      className="group cursor-pointer overflow-hidden rounded-[22px] border border-blue-100 bg-white shadow-lg shadow-blue-900/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:rounded-[24px]"
    >
      <div className="p-3 md:p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-blue-700 px-3 py-1 text-[10px] font-black text-white shadow md:text-xs">
            {product.badge || "JOYKO"}
          </span>

          <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-black text-slate-700 shadow md:text-xs">
            {product.brand}
          </span>
        </div>

        <div className="flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-3 shadow-inner md:h-44 md:p-4">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/500x500?text=No+Image";
            }}
            className="h-full max-w-full object-contain transition duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="px-3 pb-4 md:px-4">
        <p className="text-[10px] font-black uppercase text-blue-700 md:text-xs">
          {product.category}
        </p>

        <h3 className="mt-2 min-h-[44px] text-base font-black leading-tight text-slate-950 md:min-h-[50px] md:text-xl">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-blue-50 px-3 py-3 md:px-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg">
            🎧
          </div>

          <div>
            <p className="text-base font-black text-blue-700 md:text-lg">
              Hubungi Admin
            </p>
            <p className="text-[11px] font-bold text-slate-500">
              Harga grosir / info stok
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-black text-orange-700 md:text-xs">
            MOQ {product.moq || "Hubungi admin"}
          </span>

          <span className={`text-[10px] font-black md:text-xs ${stock.color}`}>
            • {stock.text}
          </span>
        </div>

        <button
          onClick={openWA}
          className="mt-4 w-full rounded-2xl bg-green-500 py-3 text-sm font-black text-white shadow-lg transition hover:bg-green-600 md:text-base"
        >
          💬 Tanya Harga
        </button>
      </div>
    </div>
  );
}