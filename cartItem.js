const data = require("./bundle/products.json");
let userDom = document.querySelector("#user");
let username = window.location.href.substring(
  window.location.href.indexOf("?") + 1,
  window.location.href.indexOf("?") + 10
);
userDom.innerHTML = username;
const arrayofproducts = data.playstations.concat(data.games);

const cartlist = document.getElementsByClassName("cart-hoverlist");

drawCartContainerUi(checkLocalStorage());
function checkLocalStorage() {
  if (localStorage.cartproductid) {
    return true;
  } else {
    return false;
  }
}

function drawCartContainerUi(cartContain) {
  if (cartContain) {

    cartlist[0].innerHTML = `
         
                <div class="cart-hoverlist-title">
                    <h3> My Cart</h3>
                    <hr/>
                </div>
                ${getMappedProductCards().map((productUiCard) => productUiCard)}
                <div class="cart-hoverlist-panel">
                    <span> total price </span>
                    <br />
                    <span class="cart-total-price"> ${
                      calculateTotalPrice() + " LE"
                    } </span>
                    <br />
                    <button class="cart-hoverlist-panel-button" >place Order</button>
                </div>
            </div>
        `;
        AddToOrdersListen();
    makeChangeListenersForInputs();
  } else {
    cartlist[0].innerHTML = `
         
                <div class="cart-hoverlist-title">
                    <h3> My Cart</h3>
                    <hr/>
                </div>
                <p style={{test-align:'center'}}>no items added</p>
             
            </div>`;
  }
}
function AddToOrdersListen(){
  document.querySelector(".cart-hoverlist-panel-button").addEventListener("click",function(){
      window.location.href = window.location.href.replace(
        "cartItem.html","Order.html"
      );
  })
}
function getCartProducts() {
  const filteredProduct = arrayofproducts.filter((product) => {
    return localStorage.cartproductid.includes(product.id);
  });

  return filteredProduct;
}

function getMappedProductCards() {
  const mappedProductCards = getCartProducts().map((product, index) => {
    return `
     <div class="cart-hoverlist-product-item">
        <div class="cart-hoverlist-product-item-description">
          <div class="cart-hoverlist-product-item-description-imgcont">
            <img
              src=${product.photoalbumurl[0]}
            />
          </div>
          <div class="cart-hoverlist-product-item-description-texts">
            <h4 class="p-name">${product.name}</h4>
            <p>${product.description}</p>
            <div class="cart-hoverlist-product-item-description-purchasedetail">
              <span> ${product.price.finalprice}</span>
              <span> ${index}</span>
              <div class="quantitychange">
                <span> Quantity: </span>
                <input
                  id=${product.id}
                  type="number"
                  class="quantity"
                  name="quantity"
                  value=${getquantity(product.id)}
                  min="0"
                  max="15"
                  
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      
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

function removeProductFromCart(productId) {
  const quantityarrays = localStorage.cartproductquantity.split(",");
  const idarrays = localStorage.cartproductid.split(",");
  const productindex = localStorage.cartproductid
    .split(",")
    .indexOf(productId.toString());
  quantityarrays.splice(productindex, 1);
  idarrays.splice(productindex, 1);
  localStorage.cartproductid = idarrays;
  localStorage.cartproductquantity = quantityarrays;
  drawCartContainerUi(checkLocalStorage());
}
function changequantity() {
  if (this.value < 1) {
    removeProductFromCart(this.id);
  } else {
    const quantityarrays = localStorage.cartproductquantity.split(",");
    const productindex = localStorage.cartproductid.split(",").indexOf(this.id);
    quantityarrays[productindex] = assignQuantity(this.value);
    localStorage.cartproductquantity = quantityarrays;
    document.querySelector(".cart-total-price").innerHTML =
      calculateTotalPrice() + " LE";
  }
}

function assignQuantity(quantity) {
  let onesString = "";
  for (var i = 0; i < quantity; i++) {
   
    onesString += "1";
  }
  return onesString;
}

function makeChangeListenersForInputs() {
  document.querySelectorAll(".quantity").forEach((element) => {
    element.addEventListener("change", changequantity);
  });
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
