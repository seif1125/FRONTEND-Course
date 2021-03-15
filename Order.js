const data = require("./bundle/products.json");
let userDom = document.querySelector("#user");
let username = window.location.href.substring(
  window.location.href.indexOf("?") + 1,
  window.location.href.indexOf("?") + 10
);
userDom.innerHTML = username;
const arrayofproducts = data.playstations.concat(data.games);
let orderContent = document.querySelector(".order-details-form");
let cartIcon = document.querySelectorAll(".fas")[1];
cartIcon.addEventListener("click",()=>{
  goToCart();
})
orderContent.innerHTML = `
<div class="order-details-form-address">
          <span>Delevering To : </span>
          <input id="address" type="text" value="" placeholder="enter address" />
          <span>Telephone : </span>
          <input id="tel" type="tel" value="" placeholder="enter Telephone" />
        </div>
        <div class="order-details-form-details">
          <span>order-details : </span>
          <div class="order-details-form-details-orders">
               ${getMappedProductCards().map((productUiCard) => productUiCard)}
          </div>
        </div>
        <div class="order-details-form-payment">
          <span>total: ${calculateTotalPrice()} LE</span>
          <span>delivery:20.00</span>
          <span>VAT(14%) ${Math.ceil(calculateTotalPrice() * 0.14)} LE</span>
        </div>
        <div class="order-details-form-total">
          <span>Total</span>
          <span>${
            calculateTotalPrice() + Math.ceil(calculateTotalPrice() * 0.14) + 20
          } LE</span>
        </div>
        <button id="confirm" > Confim order</button>
        <span class="error"><span>
`;
addPlaceOrderLisitener();
function getCartProducts() {
  const filteredProduct = arrayofproducts.filter((product) => {
    return localStorage.cartproductid.includes(product.id);
  });

  return filteredProduct;
}

function getMappedProductCards() {
  const mappedProductCards = getCartProducts().map((product) => {
    return `
            <span> x${getquantity(product.id)} ${product.name} ${
      product.price.finalprice
    } ${product.price.finalprice * getquantity(product.id)}</span>
    `;
  });
  return mappedProductCards;
}

function getquantity(productId) {
  const quantityarrays = localStorage.cartproductquantity.split(",");
  const productindex = localStorage.cartproductid
    .split(",")
    .indexOf(productId.toString());
  const quantity = quantityarrays[productindex].length;
  return quantity;
}

function calculateTotalPrice() {
  let current = 0;
  getCartProducts().reduce((accumalator, currentValue) => {
    accumalator = current;
    current =
      accumalator +
      getquantity(currentValue.id) * currentValue.price.finalprice;
 
    
  }, 0);
  return current;
}

function addPlaceOrderLisitener() {
  let placeOrderInput = document.querySelector("#confirm");

  placeOrderInput.addEventListener("click", function () {
    let addressInputValue = document.querySelector("#address").value;
    let telephoneInputValue = document.querySelector("#tel").value;
    let error = document.querySelector(".error");
    if (addressInputValue.length >= 1 && telephoneInputValue.length >= 1) {
      if (telephoneInputValue.match(/^[0-9]+$/)) {
        window.alert("your order is confirmed");
        localStorage.removeItem("cartproductid");
        localStorage.removeItem("cartproductquantity");
        goToShop();
      } else {
        error.innerHTML = "invalid telephone inputs";
      }
    } else {
      error.innerHTML = "please fill empty inputs";
    }
  });
}

function goToShop(){
    window.location.href = window.location.href.replace(
      "Order.html",
      "shop.html"
    );
}

function goToCart(){
   window.location.href = window.location.href.replace(
     "Order.html",
     "cartItem.html"
   );
}