export const WHATSAPP_NUMBER = "628123456789";

export const formatCurrency = (value) => {
  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }
  ).format(value);
};

export const getStockInfo = (stock) => {
  if (stock <= 0)
    return {
      text: "Habis",
      color: "text-red-600",
    };

  if (stock < 20)
    return {
      text: "Hampir Habis",
      color: "text-orange-500",
    };

  if (stock < 100)
    return {
      text: "Ready",
      color: "text-blue-600",
    };

  return {
    text: "Stok Banyak",
    color: "text-green-600",
  };
};