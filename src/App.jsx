import { useEffect, useMemo, useState } from "react";

import Header from "./components/Header";
import PromoBar from "./components/PromoBar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingCart from "./components/FloatingCart";
import ProductModal from "./components/ProductModal";
import MemberModal from "./components/MemberModal";
import BackToTop from "./components/BackToTop";
import Toast from "./components/Toast";
import LoadingScreen from "./components/LoadingScreen";

import { products } from "./data/products";
import { WHATSAPP_NUMBER } from "./utils/helpers";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openMember, setOpenMember] = useState(false);
  const [toast, setToast] = useState(false);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("gemilang_cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [sort, setSort] = useState("default");
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("gemilang_cart", JSON.stringify(cart));
  }, [cart]);

  const categories = ["Semua", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        category === "Semua" || category === product.category;

      return searchMatch && categoryMatch;
    });

    if (sort === "price-low") {
      result = [...result].sort(
        (a, b) => (a.wholesalePrice || a.price) - (b.wholesalePrice || b.price)
      );
    }

    if (sort === "price-high") {
      result = [...result].sort(
        (a, b) => (b.wholesalePrice || b.price) - (a.wholesalePrice || a.price)
      );
    }

    if (sort === "stock-high") {
      result = [...result].sort((a, b) => b.stock - a.stock);
    }

    return result;
  }, [search, category, sort]);

  const showToast = () => {
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 1800);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

    showToast();
    setOpenCart(true);
  };

  const plus = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

    showToast();
  };

  const minus = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQty = cart.reduce((a, b) => a + b.qty, 0);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;

    const total = cart.reduce(
      (a, b) => a + (b.wholesalePrice || b.price) * b.qty,
      0
    );

    const list = cart
      .map((item, index) => {
        const price = item.wholesalePrice || item.price;
        const subtotal = price * item.qty;

        return (
          `${index + 1}. ${item.name}\n` +
          `   Kategori: ${item.category}\n` +
          `   Brand: ${item.brand}\n` +
          `   MOQ: ${item.moq}\n` +
          `   Qty: ${item.qty}\n` +
          `   Harga: Rp ${price.toLocaleString("id-ID")}\n` +
          `   Subtotal: Rp ${subtotal.toLocaleString("id-ID")}`
        );
      })
      .join("\n\n");

    const message =
      `Halo Gemilang Maju Bersama Grosir,\n\n` +
      `Saya mau order produk berikut:\n\n` +
      `${list}\n\n` +
      `Total Item: ${totalQty}\n` +
      `Total Pesanan: Rp ${total.toLocaleString("id-ID")}\n\n` +
      `Mohon dibantu cek stok dan ongkirnya ya.`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );

    clearCart();
    setOpenCart(false);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        search={search}
        setSearch={setSearch}
        totalQty={totalQty}
        openCart={() => setOpenCart(true)}
        openMember={() => setOpenMember(true)}
      />

      <PromoBar />
      <Hero />
      <Benefits />

      <ProductGrid
        products={filteredProducts}
        categories={categories}
        activeCategory={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        addToCart={addToCart}
        openModal={setSelectedProduct}
      />

      <Testimonials />
      <Footer />

      <FloatingWhatsApp />

      <FloatingCart totalQty={totalQty} openCart={() => setOpenCart(true)} />

      <BackToTop />

      <CartDrawer
        open={openCart}
        closeCart={() => setOpenCart(false)}
        cart={cart}
        plus={plus}
        minus={minus}
        removeItem={removeItem}
        clearCart={clearCart}
        checkoutWhatsApp={checkoutWhatsApp}
      />

      <ProductModal
        product={selectedProduct}
        closeModal={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />

      <MemberModal
        open={openMember}
        closeModal={() => setOpenMember(false)}
      />

      <Toast show={toast} text="Produk masuk keranjang" />
    </div>
  );
}