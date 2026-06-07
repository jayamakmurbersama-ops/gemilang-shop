export default function FloatingCart({ totalQty, openCart }) {
  if (totalQty <= 0) return null;

  return (
    <button
      onClick={openCart}
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-2xl transition hover:-translate-y-1 hover:bg-blue-800 md:right-6 md:h-auto md:w-auto md:gap-3 md:rounded-2xl md:px-5 md:py-4 md:font-black"
    >
      <span className="text-2xl">🛒</span>

      <span className="hidden md:inline">Keranjang</span>

      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-950 md:static md:text-sm">
        {totalQty}
      </span>
    </button>
  );
}