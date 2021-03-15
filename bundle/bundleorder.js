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
        cartIcon.addEventListener("click", () => {
          goToCart();
        });
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
            if (
              addressInputValue.length >= 1 &&
              telephoneInputValue.length >= 1
            ) {
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

        function goToShop() {
          window.location.href = window.location.href.replace(
            "Order.html",
            "shop.html"
          );
        }

        function goToCart() {
          window.location.href = window.location.href.replace(
            "Order.html",
            "cartItem.html"
          );
        }
      },
      { "./bundle/products.json": 2 },
    ],
    2: [
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
  },
  {},
  [1]
);
