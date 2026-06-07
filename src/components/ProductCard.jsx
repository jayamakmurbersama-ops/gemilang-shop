import { formatCurrency, WHATSAPP_NUMBER, getStockInfo } from "../utils/helpers";

export default function ProductCard({ product, addToCart, openModal }) {
  const stock = getStockInfo(product.stock);

  const openWA = (e) => {
    e.stopPropagation();

    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya tertarik produk:%0A${product.name}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
  };

  const displayPrice =
    product.wholesalePrice && product.wholesalePrice > 0
      ? formatCurrency(product.wholesalePrice)
      : "Hubungi Admin";

  return (
    <div
      onClick={() => openModal(product)}
      className="
      group
      overflow-hidden
      rounded-[30px]
      border border-white/70
      bg-white/75
      backdrop-blur-xl
      shadow-xl
      shadow-blue-900/5
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      cursor-pointer
    "
    >
      {/* TOP AREA */}

      <div className="relative p-5 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">

        {/* badge kiri */}

        <div className="
          absolute
          top-4
          left-4
          z-20
          rounded-full
          bg-blue-700
          px-4
          py-1
          text-xs
          font-black
          text-white
          shadow
        ">
          {product.badge || "JOYKO"}
        </div>

        {/* badge kanan */}

        <div className="
          absolute
          top-4
          right-4
          z-20
          rounded-full
          bg-white
          px-4
          py-1
          text-xs
          font-black
          text-slate-700
          shadow
        ">
          {product.brand}
        </div>

        {/* FRAME GAMBAR */}

        <div
          className="
          mt-10
          rounded-2xl
          border
          border-slate-200
          bg-gradient-to-br
          from-slate-100
          via-white
          to-slate-200
          p-5
          shadow-inner
          h-[210px]
          flex
          items-center
          justify-center
        "
        >
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/500x500?text=No+Image";
            }}
            className="
            max-h-full
            max-w-full
            object-contain
            transition
            duration-300
            group-hover:scale-110
            drop-shadow-xl
          "
          />
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-5">

        <p className="text-xs font-black text-blue-700 uppercase">
          {product.category}
        </p>

        <h3 className="mt-2 min-h-[60px] text-[28px] font-black text-slate-900 leading-tight">
          {product.name}
        </h3>

        <div className="
          mt-5
          rounded-2xl
          bg-slate-100/80
          p-4
        ">
          <p className="text-3xl font-black text-blue-700">
            {displayPrice}
          </p>

          <p className="text-sm text-slate-500">
            Harga grosir / info stok
          </p>
        </div>

        <div className="mt-4 flex justify-between">

          <span className="
            rounded-full
            bg-orange-100
            px-3
            py-1
            text-xs
            font-black
            text-orange-700
          ">
            MOQ {product.moq || "Hubungi admin"}
          </span>

          <span className={`text-xs font-black ${stock.color}`}>
            ● {stock.text}
          </span>

        </div>

        <button
          onClick={openWA}
          className="
          mt-5
          w-full
          rounded-2xl
          bg-green-500
          py-4
          text-lg
          font-black
          text-white
          shadow-lg
          hover:bg-green-600
        "
        >
          Tanya Harga
        </button>

      </div>
    </div>
  );
}