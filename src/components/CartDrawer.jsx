import { formatCurrency } from "../utils/helpers";

export default function CartDrawer({
  open,
  closeCart,
  cart,
  plus,
  minus,
  removeItem,
  clearCart,
  checkoutWhatsApp,
}) {
  if (!open) return null;

  const total = cart.reduce(
    (a, b) =>
      a +
      ((b.wholesalePrice || b.price || 0) * b.qty),
    0
  );

  return (
    <div
      onClick={closeCart}
      className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        absolute
        right-0
        top-0
        flex
        h-full
        w-full
        max-w-[460px]
        flex-col
        bg-white
        shadow-2xl
      "
      >
        {/* HEADER */}

        <div className="border-b p-5">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-black">
                Keranjang
              </h2>

              <p className="text-sm text-slate-500">
                {cart.length} produk dipilih
              </p>

            </div>

            <button
              onClick={closeCart}
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-slate-100
              text-xl
            "
            >
              ×
            </button>

          </div>

        </div>

        {/* LIST */}

        <div className="flex-1 overflow-auto p-4">

          {cart.length === 0 ? (

            <div className="py-24 text-center">

              <p className="text-6xl">
                🛒
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Keranjang kosong
              </h3>

              <p className="mt-2 text-slate-500">
                Tambahkan produk dulu
              </p>

            </div>

          ) : (

            <div className="space-y-4">

              {cart.map((item) => {

                const price =
                  item.wholesalePrice ||
                  item.price ||
                  0;

                return (

                  <div
                    key={item.id}
                    className="
                    rounded-3xl
                    border
                    border-slate-200
                    p-4
                  "
                  >

                    <div className="flex gap-4">

                      <div
                        className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-100
                        p-3
                      "
                      >

                        <img
                          src={item.image}
                          className="
                          max-h-full
                          object-contain
                        "
                        />

                      </div>

                      <div className="flex-1">

                        <h4 className="font-black">
                          {item.name}
                        </h4>

                        <p className="mt-1 text-blue-700 font-black">
                          {formatCurrency(price)}
                        </p>

                        <div className="mt-3 flex items-center justify-between">

                          <div className="flex gap-2">

                            <button
                              onClick={() => minus(item.id)}
                              className="
                              h-9
                              w-9
                              rounded-xl
                              bg-slate-100
                            "
                            >
                              -
                            </button>

                            <div
                              className="
                              flex
                              h-9
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-slate-50
                            "
                            >
                              {item.qty}
                            </div>

                            <button
                              onClick={() => plus(item.id)}
                              className="
                              h-9
                              w-9
                              rounded-xl
                              bg-blue-700
                              text-white
                            "
                            >
                              +
                            </button>

                          </div>

                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="
                            text-sm
                            font-black
                            text-red-500
                          "
                          >
                            Hapus
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>

          )}

        </div>

        {/* FOOTER */}

        <div
          className="
          sticky
          bottom-0
          border-t
          bg-white
          p-5
        "
        >

          <div className="mb-4 flex justify-between">

            <span className="font-bold">
              Total
            </span>

            <span className="text-2xl font-black text-blue-700">
              {formatCurrency(total)}
            </span>

          </div>

          <div className="flex gap-3">

            <button
              onClick={clearCart}
              className="
              rounded-2xl
              border
              px-5
              py-4
              font-black
            "
            >
              Reset
            </button>

            <button
              onClick={checkoutWhatsApp}
              className="
              flex-1
              rounded-2xl
              bg-green-500
              py-4
              font-black
              text-white
            "
            >
              Checkout WA
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}