export default function Benefits() {
  const items = [
    ["🚚","Pengiriman Cepat"],
    ["💰","Harga Grosir"],
    ["📦","Produk Lengkap"],
    ["💬","Fast Respon"],
  ];

  return (
    <section className="relative py-14">

      <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-4">

        {items.map(([icon,title]) => (

          <div
            key={title}
            className="
            rounded-[30px]
            border border-white/70
            bg-white/70
            p-6
            backdrop-blur-xl
            shadow-xl
          "
          >

            <div className="text-5xl">
              {icon}
            </div>

            <h3 className="mt-4 text-xl font-black">
              {title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}