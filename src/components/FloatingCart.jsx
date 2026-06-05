export default function FloatingCart({ totalQty, openCart }) {
  if (totalQty <= 0) return null;

  return (
    <button
      onClick={openCart}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-2xl bg-blue-700 px-5 py-4 font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-blue-800"
    >
      <span className="text-2xl">🛒</span>

      <span className="hidden sm:inline">
        Keranjang
      </span>

      <span className="
      flex
      h-8
      w-8
      animate-pulse
      items-center
      justify-center
      rounded-full
      bg-amber-400
      text-sm
      text-slate-950
      ">
        {totalQty}
      </span>
    </button>
  );
}