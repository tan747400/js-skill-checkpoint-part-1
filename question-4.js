// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory[0].quantity;
let itemName;
// console.log(minQuantity);
for (let i=0; i<inventory.length; i++) {
  if (inventory[i].quantity < minQuantity) {
    minQuantity = inventory[i].quantity;
    itemName = inventory[i].name;
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${itemName} ซึ่งมี ${minQuantity} ชิ้น`);
