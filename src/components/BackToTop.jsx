import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-24
      right-6
      z-40
      rounded-2xl
      bg-slate-900
      px-4
      py-3
      font-black
      text-white
      shadow-xl
      hover:-translate-y-1
      transition
      "
    >
      ↑
    </button>
  );
}