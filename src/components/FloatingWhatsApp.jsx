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
      className="fixed bottom-5 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-600 md:left-6 md:h-auto md:w-auto md:gap-3 md:rounded-2xl md:px-5 md:py-4 md:font-black"
    >
      <span>💬</span>
      <span className="hidden md:inline">Chat Admin</span>
    </button>
  );
}