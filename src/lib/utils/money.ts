export function formatMoney(price: string) {
  const formatMoney = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  });
  const raw = Number.parseInt(price);
  price = formatMoney.format(raw);
  return price;
}
