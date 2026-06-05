export default function Toast({ show, text }) {
  if (!show) return null;

  return (
    <div className="fixed top-24 left-1/2 z-[100] -translate-x-1/2 rounded-2xl bg-slate-900 px-6 py-4 font-black text-white shadow-2xl">
      {text}
    </div>
  );
}
