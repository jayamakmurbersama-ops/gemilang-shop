/* global __BUILD_NUMBER__, __BUILD_TIME__ */

// Penanda build otomatis. Nilai __BUILD_NUMBER__ dan __BUILD_TIME__
// disuntikkan saat build oleh vite.config.js (lihat bagian `define`).
export default function BuildInfo() {
  return (
    <span className="text-[11px] text-slate-600">
      Build #{__BUILD_NUMBER__} · {__BUILD_TIME__} WIB
    </span>
  );
}
