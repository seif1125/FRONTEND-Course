const data = require("./products.json");
const arrayofproducts = data.playstations.concat(data.games);
console.log(arrayofproducts);
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
    getMappedProductCards();
  } else {
    console.log("ad");
  }
}

function getCartProducts() {
  const filteredProduct = arrayofproducts.filter((product) => {
    return localStorage.cartproductid.includes(product.id);
  });

  return filteredProduct;
}

function getMappedProductCards() {
  const mappedProductCards = getCartProducts().map((product) => {
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
              <div class="quantitychange">
                <span> Quantity: </span>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value=${getquantity(product.id)}
                  min="1"
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
  console.log(mappedProductCards);
}

function getquantity(productId) {
  const quantityarrays = localStorage.cartproductquantity.split(",");
  const productindex = localStorage.cartproductid
    .split(",")
    .indexOf(productId.toString());
  const quantity = quantityarrays[productindex].length;
  return quantity;
}
