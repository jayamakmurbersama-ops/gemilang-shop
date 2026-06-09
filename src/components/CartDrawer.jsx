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
    (sum, item) => sum + (item.wholesalePrice || item.price || 0) * item.qty,
    0
  );

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      onClick={closeCart}
      className="fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 top-0 flex h-full w-full max-w-[460px] flex-col bg-white shadow-2xl"
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">Keranjang Belanja</h2>
              <p className="text-sm text-blue-100">{totalQty} item dipilih</p>
            </div>

            <button
              onClick={closeCart}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl font-black"
            >
              ×
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-auto bg-slate-50 p-4">
          {cart.length === 0 ? (
            <div className="rounded-[28px] bg-white p-10 text-center shadow-sm">
              <p className="text-6xl">🛒</p>
              <h3 className="mt-4 text-2xl font-black">Keranjang kosong</h3>
              <p className="mt-2 text-slate-500">
                Tambahkan produk terlebih dahulu.
              </p>
            </div>
          ) : (
            cart.map((item) => {
              const price = item.wholesalePrice || item.price || 0;

              return (
                <div
                  key={item.id}
                  className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="flex gap-4">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-slate-100 p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="line-clamp-2 font-black leading-snug text-slate-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-blue-700">
                        {price > 0 ? formatCurrency(price) : "Hubungi Admin"}
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => minus(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 font-black"
                          >
                            -
                          </button>

                          <span className="flex h-9 min-w-10 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">
                            {item.qty}
                          </span>

                          <button
                            onClick={() => plus(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-700 font-black text-white"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm font-black text-red-500"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="border-t bg-white p-5">
          <div className="rounded-[24px] bg-blue-50 p-4">
            <div className="flex justify-between text-sm font-bold text-slate-500">
              <span>Total Item</span>
              <span>{totalQty}</span>
            </div>

            <div className="mt-2 flex justify-between text-xl font-black">
              <span>Total</span>
              <span className="text-blue-700">{formatCurrency(total)}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={clearCart}
              disabled={cart.length === 0}
              className="rounded-2xl border border-slate-200 px-5 py-4 font-black text-slate-600 disabled:opacity-40"
            >
              Reset
            </button>

            <button
              onClick={checkoutWhatsApp}
              disabled={cart.length === 0}
              className="flex-1 rounded-2xl bg-green-500 py-4 font-black text-white shadow-lg disabled:bg-slate-300"
            >
              Checkout WA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}