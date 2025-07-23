// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";

// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;

  for(let i=0; i<products.length; i++) {
    totalPrice = totalPrice + (products[i].price * products[i].quantity);
  }

  if (promotionCode === "SALE20") {
    totalPrice = totalPrice - (0.2 * totalPrice);
  } else if (promotionCode === "SALE50") {
    totalPrice = totalPrice - (0.5 * totalPrice);
  } else {
    totalPrice = totalPrice;
  }

  return totalPrice;
}


