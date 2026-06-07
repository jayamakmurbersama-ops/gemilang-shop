import { WHATSAPP_NUMBER, getStockInfo, formatCurrency } from "../utils/helpers";

export default function ProductModal({
  product,
  isOpen,
  onClose,
  addToCart,
}) {
  if (!isOpen || !product) return null;

  const stock = getStockInfo(product.stock);

  const openWA = () => {
    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya tertarik produk:%0A` +
      `${product.name}%0A%0A` +
      `Mohon info harga grosir dan stok ya.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/55
      backdrop-blur-sm
      p-4
    "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        w-full
        max-w-6xl
        overflow-hidden
        rounded-[34px]
        bg-white
        shadow-2xl
      "
      >
        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 p-8">

            <div className="absolute left-5 top-5 rounded-full bg-blue-700 px-5 py-2 text-sm font-black text-white">
              {product.badge || "JOYKO"}
            </div>

            <button
              onClick={onClose}
              className="
              absolute
              right-5
              top-5
              h-12
              w-12
              rounded-full
              bg-white
              text-xl
              shadow-lg
            "
            >
              ✕
            </button>

            <div
              className="
              mt-14
              flex
              h-[420px]
              items-center
              justify-center
              rounded-[28px]
              border
              border-slate-200
              bg-gradient-to-br
              from-white
              via-slate-50
              to-slate-100
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
                drop-shadow-2xl
              "
              />
            </div>
          </div>

          {/* RIGHT */}

          <div className="p-8">

            <p className="font-black uppercase tracking-wider text-blue-700">
              {product.category}
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              {product.name}
            </h2>

            <div className="mt-6 rounded-3xl bg-blue-50 p-5">

              <p className="text-4xl font-black text-blue-700">
                {product.wholesalePrice > 0
                  ? formatCurrency(product.wholesalePrice)
                  : "Hubungi Admin"}
              </p>

              <p className="mt-1 font-bold text-slate-500">
                Harga Grosir / Informasi Stok
              </p>

            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">
                  Brand
                </p>

                <p className="font-black">
                  {product.brand}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">
                  MOQ
                </p>

                <p className="font-black">
                  {product.moq || "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">
                  Status
                </p>

                <p className={`font-black ${stock.color}`}>
                  {stock.text}
                </p>
              </div>

            </div>

            <div className="mt-7 rounded-3xl border border-slate-200 p-5">

              <h3 className="font-black text-slate-900">
                Deskripsi
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Produk original berkualitas untuk kebutuhan
                sekolah, kantor, reseller, maupun bisnis ATK.
              </p>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => addToCart(product)}
                className="
                flex-1
                rounded-2xl
                bg-blue-700
                py-4
                text-lg
                font-black
                text-white
                shadow-lg
              "
              >
                + Tambah Keranjang
              </button>

              <button
                onClick={openWA}
                className="
                flex-1
                rounded-2xl
                bg-green-500
                py-4
                text-lg
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