console.log("Hello");
function calculateTotalCost(cart) {
  let totalcost = 0;
  // for (let x=i < cart.length; i++) {)
  for (let x = 0; x < cart.length; x++) {
    totalCost += cart[x].price;
  }
  return totalCost;
}

// Example usage:
const shoppingCart = [
  { name: "fones", price: 100 },
  { name: "caps", price: 50 },
  { name: "shoes", price: 70 },
];

const totalCost = calculateTotalCost(shoppingCart);
console.log("Total cost of items in the shopping cart:", totalCost);
