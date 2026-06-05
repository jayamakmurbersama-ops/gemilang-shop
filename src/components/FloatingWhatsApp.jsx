import { WHATSAPP_NUMBER } from "../utils/helpers";

export default function FloatingWhatsApp() {
  const openWA = () => {
    const text =
      "Halo Gemilang Maju Bersama Grosir,%0ASaya ingin bertanya produk.";

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <button
      onClick={openWA}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-2xl bg-green-500 px-5 py-4 font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-600"
    >
      <span className="text-2xl">💬</span>
      <span className="hidden sm:inline">Chat Admin</span>
    </button>
  );
}