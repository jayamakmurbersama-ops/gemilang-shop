export default function PromoBar() {
  const items = [
    ["🚚", "Pengiriman Cepat"],
    ["🏪", "Supplier Grosir"],
    ["⭐", "Produk Original"],
    ["💬", "Fast Response"],
  ];

  return (
    <section className="px-4 pt-6">

      <div
        className="
        mx-auto
        max-w-7xl
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-r
        from-blue-700
        via-blue-600
        to-blue-800
        p-6
        shadow-2xl
      "
      >

        <div className="grid gap-6 lg:grid-cols-2">

          <div>

            <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black text-white backdrop-blur">
              Supplier ATK Surabaya
            </div>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Harga Grosir untuk
              <br />
              Toko, Sekolah & Reseller
            </h2>

            <p className="mt-4 max-w-xl text-blue-100">
              Produk original dengan harga grosir,
              siap kirim dan cocok untuk kebutuhan
              toko ATK, reseller, sekolah, kantor,
              dan proyek.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">

            {items.map(([icon, title]) => (

              <div
                key={title}
                className="
                rounded-3xl
                bg-white/10
                p-5
                backdrop-blur-xl
              "
              >

                <div className="text-4xl">
                  {icon}
                </div>

                <p className="mt-3 font-black text-white">
                  {title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}