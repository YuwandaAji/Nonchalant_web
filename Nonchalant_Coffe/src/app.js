document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Espresso", img: "1.jpg", price: 15000 },
      { id: 2, name: "Americano", img: "2.jpeg", price: 12000 },
      { id: 3, name: "Cappucino", img: "3.jpeg", price: 14000 },
      { id: 4, name: "Waffles", img: "4.jpeg", price: 25000 },
      { id: 5, name: "Croissant", img: "5.jpeg", price: 23000 },
      { id: 6, name: "Nonchawidch", img: "6.jpeg", price: 35000 },
    ],
  }));
  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.item.push(newItem)
      console.log(this.item);
    }
  });
});

  



//Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID',{
    style: 'currency',
    currency:'IDR',
    minimumFractionDigits:0
  }).format(number);
};
