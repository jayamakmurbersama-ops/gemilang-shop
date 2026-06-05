export default function PromoBar() {
  return (
    <div className="bg-amber-400 py-2.5 text-center font-black text-slate-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 text-sm">
        <span>🎉 Promo Grosir ATK</span>
        <span className="hidden md:inline">•</span>
        <span>Harga khusus untuk reseller, kantor & sekolah</span>
      </div>
    </div>
  );
}