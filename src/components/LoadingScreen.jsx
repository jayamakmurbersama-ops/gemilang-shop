export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-amber-400"></div>

        <h1 className="mt-6 text-2xl font-black">
          Gemilang Maju Bersama Grosir
        </h1>

        <p className="mt-2 text-slate-400">
          Menyiapkan katalog produk...
        </p>
      </div>
    </div>
  );
}