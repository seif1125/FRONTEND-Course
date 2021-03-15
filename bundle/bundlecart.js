(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        module.exports = {
          playstations: [
            {
              id: 1,
              name: "Sony PlayStation 4 Slim ",
              description:
                "Sony PlayStation 4 Slim - 500GB Gaming Console - Black + FIFA 20 Standard Edition - Arabic Version Game",
              brand: "Sony",
              price: {
                finalprice: 6492,
                discount: "28%",
                originalprice: 9000,
              },
              photoalbumurl: [
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/485551/1.jpg?3966",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/485551/2.jpg?3966",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/485551/3.jpg?3966",
              ],
            },
            {
              id: 2,
              name: "Sony PlayStation 4 pro ",
              description:
                "Sony PlayStation 4 Pro - 1TB Gaming Console - Black + Extra Controller + Grand Theft Auto V",
              brand: "Sony",
              price: {
                finalprice: 8949,
                discount: "11%",
                originalprice: 10000,
              },
              photoalbumurl: [
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/75/011071/1.jpg?6401",
              ],
            },
            {
              id: 3,
              name: "Sony PlayStation 4 slim ",
              description:
                "Sony PlayStation 4 Slim - 500GB Gaming Console - Black - Region 2",
              brand: "Sony",
              price: {
                finalprice: 6399,
                discount: "36%",
                originalprice: 10000,
              },
              photoalbumurl: [
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/1.jpg?6786",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/5.jpg?6786",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/4.jpg?6786",
              ],
            },
            {
              id: 4,
              name: "Sony PlayStation 4 slim ",
              description:
                "Sony PlayStation 4 Slim - 500GB Gaming Console - Black - Region 2",
              brand: "Sony",
              price: {
                finalprice: 6399,
                discount: "36%",
                originalprice: 10000,
              },
              photoalbumurl: [
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/1.jpg?6786",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/5.jpg?6786",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/4.jpg?6786",
              ],
            },
            {
              id: 5,
              name: "Sony PlayStation 5 Console ",
              description: "Sony PlayStation 5 Console + Cyberpunk 2077",
              brand: "Sony",
              price: {
                finalprice: 17570,
                discount: "16%",
                originalprice: 21000,
              },
              photoalbumurl: [
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/726012/1.jpg?7763",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/726012/2.jpg?7763",
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/726012/4.jpg?7763",
              ],
            },
          ],

          games: [
            {
              id: 6,
              name: "PUBG - PlayerUnknown's Battlegrounds ",
              description:
                "Sony Interactive Entertainment PUBG - PlayerUnknown's Battlegrounds Arabic - PS4",
              brand: "Sony",
              price: {
                finalprice: 399,
                discount: "14%",
                originalprice: 456,
              },
              photoalbumurl: [
                "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/67/196991/1.jpg?4109",
              ],
            },
          ],
        };
      },
      {},
    ],
    2: [
      function (require, module, exports) {
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
        function AddToOrdersListen() {
          document
            .querySelector(".cart-hoverlist-panel-button")
            .addEventListener("click", function () {
              window.location.href = window.location.href.replace(
                "cartItem.html",
                "Order.html"
              );
            });
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
            const productindex = localStorage.cartproductid
              .split(",")
              .indexOf(this.id);
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
      },
      { "./bundle/products.json": 1 },
    ],
  },
  {},
  [2]
);
