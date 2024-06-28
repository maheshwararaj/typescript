//2023178028 MAHESHWARARAJ


interface Product {
  name: string;
  price: number;
  quantity: number;
}

class ProductCatalog {
  private products: Product[] = [];
  private cart: Product[] = [];

  constructor(products: Product[]) {
    this.products = products;
  }

  displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    this.products.forEach((product, index) => {
      const row = productList.insertRow();
      row.innerHTML = `
                <td>${product.name}</td>
                <td>Rs.${product.price}</td>
                <td>${product.quantity}</td>
                <td><button onclick="productCatalog.addToCart(${index})">Add to Cart</button></td>
            `;
    });
  }

  displayCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
    this.cart.forEach((product, index) => {
      const row = cartList.insertRow();
      row.innerHTML = `
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td><button onclick="productCatalog.removeFromCart(${index})">Remove</button></td>
            `;
    });
  }

  addToCart(index: number) {
    const product = this.products[index];
    if (product.quantity > 0) {
      product.quantity--;
      const existingIndex = this.cart.findIndex((p) => p.name === product.name);
      if (existingIndex !== -1) {
        this.cart[existingIndex].quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.displayProducts();
      this.displayCart();
    }
  }

  removeFromCart(index: number) {
    const product = this.cart[index];
    product.quantity--;
    if (product.quantity === 0) {
      this.cart.splice(index, 1);
    }

    const originalIndex = this.products.findIndex(
      (p) => p.name === product.name
    );
    this.products[originalIndex].quantity++;
    this.displayProducts();
    this.displayCart();
  }
}

const products: Product[] = [
  { name: "Tshirt", price: 200, quantity: 5 },
  { name: "Shirt", price: 450, quantity: 3 },
  { name: "Shoe", price: 800, quantity: 7 },
  { name: "Pant", price: 600, quantity: 5 },
];

const productCatalog = new ProductCatalog(products);
productCatalog.displayProducts();
productCatalog.displayCart();
