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
  const total = cart.reduce(
    (a, b) => a + (b.wholesalePrice || b.price) * b.qty,
    0
  );

  const totalQty = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <div
      onMouseLeave={closeCart}
      className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="bg-slate-950 p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">Keranjang</h2>
            <p className="text-sm text-slate-300">{totalQty} item dipilih</p>
          </div>

          <button
            onClick={closeCart}
            className="h-10 w-10 rounded-full bg-white/10 text-2xl"
          >
            ×
          </button>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-4 rounded-xl bg-white/10 px-4 py-2 text-sm font-black text-white hover:bg-white/20"
          >
            Kosongkan Keranjang
          </button>
        )}
      </div>

      <div className="h-[68vh] space-y-4 overflow-y-auto bg-slate-50 p-5">
        {cart.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="text-5xl">🛒</p>
            <p className="mt-4 font-black">Keranjang masih kosong</p>
            <p className="mt-1 text-sm text-slate-500">
              Tambahkan produk terlebih dahulu.
            </p>
          </div>
        ) : (
          cart.map((item) => {
            const price = item.wholesalePrice || item.price;

            return (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-2xl bg-slate-100 object-contain p-2"
                  />

                  <div className="flex-1">
                    <div className="flex gap-2">
                      <h3 className="flex-1 font-black leading-snug text-slate-900">
                        {item.name}
                      </h3>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm font-black text-red-500"
                      >
                        Hapus
                      </button>
                    </div>

                    <p className="mt-1 text-sm font-bold text-blue-700">
                      {formatCurrency(price)}
                    </p>

                    <p className="text-xs text-slate-500">MOQ {item.moq}</p>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => minus(item.id)}
                        className="h-9 w-9 rounded-xl bg-slate-200 font-black"
                      >
                        -
                      </button>

                      <span className="min-w-8 text-center font-black">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => plus(item.id)}
                        className="h-9 w-9 rounded-xl bg-blue-700 font-black text-white"
                      >
                        +
                      </button>

                      <p className="ml-auto text-sm font-black text-slate-800">
                        {formatCurrency(price * item.qty)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="border-t bg-white p-5">
        <div className="rounded-3xl bg-slate-50 p-4">
          <div className="flex justify-between text-sm text-slate-500">
            <span>Total Item</span>
            <span>{totalQty}</span>
          </div>

          <div className="mt-2 flex justify-between text-xl font-black">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>

        <button
          onClick={checkoutWhatsApp}
          disabled={cart.length === 0}
          className="mt-4 w-full rounded-2xl bg-green-500 py-4 font-black text-white disabled:bg-slate-300"
        >
          Checkout WhatsApp
        </button>
      </div>
    </div>
  );
}