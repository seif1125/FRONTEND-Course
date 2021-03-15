(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "playstations": [
    {
      "id": 1,
      "name": "Sony PlayStation 4 Slim ",
      "description": "Sony PlayStation 4 Slim - 500GB Gaming Console - Black + FIFA 20 Standard Edition - Arabic Version Game",
      "brand": "Sony",
      "price": {
        "finalprice": 6492,
        "discount": "28%",
        "originalprice": 9000
      },
      "photoalbumurl": [
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/485551/1.jpg?3966",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/485551/2.jpg?3966",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/485551/3.jpg?3966"
      ]
    },
    {
      "id": 2,
      "name": "Sony PlayStation 4 pro ",
      "description": "Sony PlayStation 4 Pro - 1TB Gaming Console - Black + Extra Controller + Grand Theft Auto V",
      "brand": "Sony",
      "price": {
        "finalprice": 8949,
        "discount": "11%",
        "originalprice": 10000
      },
      "photoalbumurl": [
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/75/011071/1.jpg?6401"
      ]
    },
    {
      "id": 3,
      "name": "Sony PlayStation 4 slim ",
      "description": "Sony PlayStation 4 Slim - 500GB Gaming Console - Black - Region 2",
      "brand": "Sony",
      "price": {
        "finalprice": 6399,
        "discount": "36%",
        "originalprice": 10000
      },
      "photoalbumurl": [
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/1.jpg?6786",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/5.jpg?6786",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/4.jpg?6786"
      ]
    },
    {
      "id": 4,
      "name": "Sony PlayStation 4 slim ",
      "description": "Sony PlayStation 4 Slim - 500GB Gaming Console - Black - Region 2",
      "brand": "Sony",
      "price": {
        "finalprice": 6399,
        "discount": "36%",
        "originalprice": 10000
      },
      "photoalbumurl": [
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/1.jpg?6786",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/5.jpg?6786",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/530761/4.jpg?6786"
      ]
    },
    {
      "id": 5,
      "name": "Sony PlayStation 5 Console ",
      "description": "Sony PlayStation 5 Console + Cyberpunk 2077",
      "brand": "Sony",
      "price": {
        "finalprice": 17570,
        "discount": "16%",
        "originalprice": 21000
      },
      "photoalbumurl": [
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/726012/1.jpg?7763",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/726012/2.jpg?7763",
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/726012/4.jpg?7763"
      ]
    }
  ],

  "games": [
    {
      "id": 6,
      "name": "PUBG - PlayerUnknown's Battlegrounds ",
      "description": "Sony Interactive Entertainment PUBG - PlayerUnknown's Battlegrounds Arabic - PS4",
      "brand": "Sony",
      "price": {
        "finalprice": 399,
        "discount": "14%",
        "originalprice": 456
      },
      "photoalbumurl": [
        "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/67/196991/1.jpg?4109"
      ]
    }
  ]
}

},{}],2:[function(require,module,exports){
const data = require("./bundle/products.json");
let userDom = document.querySelector("#user");
let username = window.location.href.substring(
  window.location.href.indexOf("?") + 1,
  window.location.href.indexOf("?") + 10
);
userDom.innerHTML = username;
let cartItemsBadge = document.querySelector(".cart-items");
let productDom = document.querySelector(".products-container");
let search = document.getElementById("search-inp");
let selectedCategeory = document.querySelector(".selected-categeory");
let cartIcon = document.querySelectorAll(".fas")[1];
let selectedCategeoryItem = document.querySelectorAll(
  ".custom-select__trigger"
)[0];
let categeoryArrow = document.querySelectorAll(".arrow")[0];
let allSelectedCategeoryOptions = document.querySelectorAll(
  ".custom-options"
)[0];
let selectedCategeoryOptions = document.querySelectorAll(".custom-option");
selectedCategeory.innerHTML = "all";
checkCart();
getDataCategeorized();

cartIcon.addEventListener("click", () => {
  window.location.href = window.location.href.replace(
    "shop.html",
    "cartItem.html"
  );
});

selectedCategeoryItem.addEventListener("click", () => {
  if (allSelectedCategeoryOptions.style.display == "none") {
    allSelectedCategeoryOptions.style.display = "flex";
    categeoryArrow.style.transform = "rotate(90deg)";
  } else {
    allSelectedCategeoryOptions.style.display = "none";
    categeoryArrow.style.transform = "rotate(-90deg)";
  }
});

selectedCategeoryOptions.forEach((element) => {
  element.addEventListener("click", () => {
    selectedCategeoryOptions[0].className = "custom-option";
    selectedCategeoryOptions[1].className = "custom-option";
    selectedCategeoryOptions[2].className = "custom-option";
    selectedCategeory.innerHTML = element.getAttribute("value");
    allSelectedCategeoryOptions.style.display = "none";
    element.classList.add("selected");
    getDataCategeorized();
  });
});

function getDataCategeorized() {

  if (selectedCategeory.innerText === "all") {
    filterData(data.playstations.concat(data.games), search.value);
  } else if (selectedCategeory.innerText === "playstations") {
    filterData(data.playstations, search.value);
  } else {
    filterData(data.games, search.value);
  }
}

function checkCart() {
  if (localStorage.cartproductid) {
    const itemsNumber = localStorage.cartproductid.split(",").length - 1;
    if (itemsNumber >= 1) {
      cartItemsBadge.style.display = "block";
      cartItemsBadge.innerHTML = itemsNumber;
    } else {
      cartItemsBadge.style.display = "none";
    }
  } else {
    cartItemsBadge.style.display = "none";
  }
}

function filterData(categeorizedData, searchvalue) {
  const filterdCategeorizedData = categeorizedData.filter((data) => {
    return data.name.toLowerCase().includes(searchvalue.toLowerCase());
  });
  const productitems = filterdCategeorizedData.map((item) => {
    return `
     <div class="products-card">
                     <img class="product-card-img"
                        src=${item.photoalbumurl[0]}
                         />
                    <h3 class="product-card-name">${item.name}</h3>
                    <p class="product-card-description">${item.description.substr(
                      0,
                      30
                    )}</p>
                    <span class="product-card-oldprice"><del>${
                      item.price.originalprice + " LE"
                    }</del></span>
                    <span class="product-card-discount">${
                      "-" + item.price.discount
                    }</span>
                    <i class="fas fa-heart like"></i>
                    <br>
                    <hr>
                    <span class="product-card-finalprice">${
                      item.price.finalprice + " LE"
                    }</span>
                    <button value='${
                      item.id
                    }' class="product-card-add" title="add to cart" >add to cart</button>
                </div>
     
     `;
  });

  updateProductUi(productitems);
}

function updateProductUi(productDomArray) {
  productDom.innerHTML = "";
  productDomArray.forEach((product) => {
    productDom.innerHTML += product;
  });
}

let productCards = document.querySelectorAll(".product-card-add");
productCards.forEach((element) => {
  element.addEventListener("click", () => AddToCart(element.value));
});

function AddToCart(id) {

  if (localStorage.getItem("cartproductid")) {
    let cartProductsIdArray = localStorage.getItem("cartproductid").split(",");
    let cartProductsQuantityArray = localStorage
      .getItem("cartproductquantity")
      .split(",");
    if (cartProductsIdArray.includes(id)) {
      let quantity =
        1 + cartProductsQuantityArray[cartProductsIdArray.indexOf(id)];
  
      cartProductsQuantityArray[cartProductsIdArray.indexOf(id)] = quantity;
      localStorage.cartproductquantity = cartProductsQuantityArray;
    } else {
      localStorage.cartproductid += `,${id}`;
      localStorage.cartproductquantity += `,${1}`;
      cartItemsBadge.innerHTML =
        localStorage.cartproductid.split(",").length - 1;
    }
  } else {
    localStorage.setItem("cartproductid", []);
    localStorage.setItem("cartproductquantity", []);
    localStorage.cartproductid += `...,${id}`;
    localStorage.cartproductquantity += `...,${1}`;
  }
  checkCart();
  makeCartAnimation();
}

function makeCartAnimation() {
  cartIcon.className = cartIcon.className =
    "fas fa-shopping-cart fa-2x  animate-cart";
  cartItemsBadge.className = "cart-items  animate-cart";

  setTimeout(() => {
    cartIcon.className = cartIcon.className = "fas fa-shopping-cart fa-2x  ";
    cartItemsBadge.className = "cart-items ";

  }, 750);
}

},{"./bundle/products.json":1}]},{},[2]);
