//2023178028 MAHESHWARARAJ
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ProductCatalog = /** @class */ (function () {
    function ProductCatalog(products) {
        this.products = [];
        this.cart = [];
        this.products = products;
    }
    ProductCatalog.prototype.displayProducts = function () {
        var productList = document.getElementById("productList");
        productList.innerHTML = "";
        this.products.forEach(function (product, index) {
            var row = productList.insertRow();
            row.innerHTML = "\n                <td>".concat(product.name, "</td>\n                <td>Rs.").concat(product.price, "</td>\n                <td>").concat(product.quantity, "</td>\n                <td><button onclick=\"productCatalog.addToCart(").concat(index, ")\">Add to Cart</button></td>\n            ");
        });
    };
    ProductCatalog.prototype.displayCart = function () {
        var cartList = document.getElementById("cartList");
        cartList.innerHTML = "";
        this.cart.forEach(function (product, index) {
            var row = cartList.insertRow();
            row.innerHTML = "\n                <td>".concat(product.name, "</td>\n                <td>$").concat(product.price, "</td>\n                <td>").concat(product.quantity, "</td>\n                <td><button onclick=\"productCatalog.removeFromCart(").concat(index, ")\">Remove</button></td>\n            ");
        });
    };
    ProductCatalog.prototype.addToCart = function (index) {
        var product = this.products[index];
        if (product.quantity > 0) {
            product.quantity--;
            var existingIndex = this.cart.findIndex(function (p) { return p.name === product.name; });
            if (existingIndex !== -1) {
                this.cart[existingIndex].quantity++;
            }
            else {
                this.cart.push(__assign(__assign({}, product), { quantity: 1 }));
            }
            this.displayProducts();
            this.displayCart();
        }
    };
    ProductCatalog.prototype.removeFromCart = function (index) {
        var product = this.cart[index];
        product.quantity--;
        if (product.quantity === 0) {
            this.cart.splice(index, 1);
        }
        var originalIndex = this.products.findIndex(function (p) { return p.name === product.name; });
        this.products[originalIndex].quantity++;
        this.displayProducts();
        this.displayCart();
    };
    return ProductCatalog;
}());
var products = [
    { name: "Tshirt", price: 200, quantity: 5 },
    { name: "Shirt", price: 450, quantity: 3 },
    { name: "Shoe", price: 800, quantity: 7 },
    { name: "Pant", price: 600, quantity: 5 },
];
var productCatalog = new ProductCatalog(products);
productCatalog.displayProducts();
productCatalog.displayCart();
