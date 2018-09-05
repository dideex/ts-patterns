// export function cashier() {
//   return {};
// }
interface Cart {
  name: string;
  price: number;
  qty: number;
}

export class Cashier {
  cart: Cart[] = [];
  add(name: string, price: number, qty: number = 1): void {
    this.cart.push({ name, price, qty });
  }
  addItem(item: Cart): void {
    this.cart.push(item);
  }
  get length(): number {
    return this.cart.reduce((quantity, { qty }) => (quantity + qty), 0);
  }
  get total(): number {
    return this.cart.reduce((totalPrice, { price, qty }) => (totalPrice + (price * qty)), 0);
  }
}
