import { useState } from "react";
import { WHATSAPP_NUMBER } from "../utils/helpers";

export default function MemberModal({ open, closeModal }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    type: "Pribadi",
  });

  if (!open) return null;

  const updateForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const submitMember = () => {
    const text =
      `Halo Gemilang Maju Bersama Grosir,%0A%0A` +
      `Saya ingin daftar member:%0A%0A` +
      `Nama: ${form.name}%0A` +
      `No WA: ${form.phone}%0A` +
      `Kota: ${form.city}%0A` +
      `Jenis kebutuhan: ${form.type}%0A%0A` +
      `Mohon info benefit membernya ya.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    closeModal();
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-[32px] bg-white p-7 shadow-2xl"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="font-black uppercase tracking-widest text-blue-700">
              Member Grosir
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Daftar Member
            </h2>

            <p className="mt-2 text-slate-500">
              Dapatkan info promo, harga grosir, benefit khusus, dan update produk terbaru.
            </p>
          </div>

          <button
            onClick={closeModal}
            className="h-10 w-10 rounded-full bg-slate-100 text-xl font-black"
          >
            ×
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <input
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
            className="w-full rounded-2xl border px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"
            placeholder="Nama lengkap"
          />

          <input
            value={form.phone}
            onChange={(e) => updateForm("phone", e.target.value)}
            className="w-full rounded-2xl border px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"
            placeholder="Nomor WhatsApp"
          />

          <input
            value={form.city}
            onChange={(e) => updateForm("city", e.target.value)}
            className="w-full rounded-2xl border px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"
            placeholder="Kota / Area"
          />

          <select
            value={form.type}
            onChange={(e) => updateForm("type", e.target.value)}
            className="w-full rounded-2xl border px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"
          >
            <option>Pribadi</option>
            <option>Kantor</option>
            <option>Sekolah</option>
            <option>Reseller / Toko</option>
          </select>
        </div>

        <button
          onClick={submitMember}
          className="mt-5 w-full rounded-2xl bg-blue-700 py-4 font-black text-white hover:bg-blue-800"
        >
          Daftar via WhatsApp
        </button>

        <p className="mt-4 text-center text-sm text-slate-500">
          Data member akan dikirim ke admin WhatsApp untuk tahap awal.
        </p>
      </div>
    </div>
  );
}