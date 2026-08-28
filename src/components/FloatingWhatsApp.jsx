import { WHATSAPP_NUMBER } from "../utils/helpers";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-[99]
      flex
      items-center
      gap-3
      rounded-full
      bg-gradient-to-r
      from-green-500
      to-green-600
      px-5
      py-4
      text-white
      shadow-2xl
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-green-300/50
      "
    >
      <span className="text-2xl">💬</span>

      <div className="hidden sm:block">
        <p className="text-xs font-bold text-green-100">
          Butuh Bantuan?
        </p>

        <p className="font-black">
          Chat WhatsApp
        </p>
      </div>
    </a>
  );
}