import {
  formatCurrency,
  WHATSAPP_NUMBER,
  getStockInfo,
} from "../utils/helpers";

export default function ProductModal({
  product,
  closeModal,
  addToCart,
}) {
  if (!product) return null;

  const stock = getStockInfo(product.stock);

  const contactWA = () => {
    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya tertarik produk:%0A` +
      `${product.name}%0A%0A` +
      `Mohon info harga grosir dan stoknya ya.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
  };

  return (
    <div
      onClick={closeModal}
      className="
      fixed
      inset-0
      z-[80]
      flex
      items-center
      justify-center
      bg-black/60
      p-4
      backdrop-blur-sm
    "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        max-h-[92vh]
        w-full
        max-w-6xl
        overflow-auto
        rounded-[36px]
        bg-white
        shadow-2xl
      "
      >
        <div className="grid lg:grid-cols-2">

          {/* IMAGE */}

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8">

            <div className="mb-4 flex justify-between">

              <span className="rounded-full bg-blue-700 px-4 py-2 text-xs font-black text-white">
                {product.badge || "JOYKO"}
              </span>

              <button
                onClick={closeModal}
                className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-xl
                shadow-lg
              "
              >
                ×
              </button>

            </div>

            <div
              className="
              flex
              h-[420px]
              items-center
              justify-center
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-inner
            "
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                max-h-full
                max-w-full
                object-contain
              "
              />
            </div>

          </div>

          {/* INFO */}

          <div className="p-8">

            <p className="font-black uppercase tracking-widest text-blue-700">
              {product.category}
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-950">
              {product.name}
            </h2>

            <div className="mt-5 flex gap-2">

              <span
                className={`
                rounded-full
                px-4
                py-2
                text-sm
                font-black
                bg-slate-100
                ${stock.color}
              `}
              >
                ● {stock.text}
              </span>

              <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-black text-orange-700">
                MOQ {product.moq}
              </span>

            </div>

            <div
              className="
              mt-6
              rounded-[28px]
              bg-blue-50
              p-6
            "
            >

              <p className="text-sm text-slate-400 line-through">
                Retail {formatCurrency(product.price)}
              </p>

              <p className="mt-1 text-5xl font-black text-blue-700">
                {formatCurrency(product.wholesalePrice)}
              </p>

              <p className="mt-2 font-bold text-slate-500">
                Harga Grosir
              </p>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs text-slate-500">
                  Brand
                </p>

                <p className="font-black">
                  {product.brand}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs text-slate-500">
                  Kategori
                </p>

                <p className="font-black">
                  {product.category}
                </p>
              </div>

            </div>

            <div className="mt-6">

              <h3 className="font-black text-slate-900">
                Deskripsi Produk
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                {product.description}
              </p>

            </div>

            <div className="mt-8 flex gap-3">

              <button
                onClick={() => addToCart(product)}
                className="
                flex-1
                rounded-2xl
                bg-blue-700
                py-4
                font-black
                text-white
                shadow-lg
              "
              >
                + Tambah Keranjang
              </button>

              <button
                onClick={contactWA}
                className="
                flex-1
                rounded-2xl
                bg-green-500
                py-4
                font-black
                text-white
                shadow-lg
              "
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