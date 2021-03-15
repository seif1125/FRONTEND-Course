let email = document.querySelectorAll("input")[0].value;
let password = document.querySelectorAll("input")[1].value;
let login_btn = document.querySelectorAll("input")[2];
let error = document.getElementsByClassName("error")[0];
let home = document.getElementsByClassName("brand")[0];

login_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (localStorage.emails && localStorage.passwords) {
    if (
      localStorage.emails.includes(email) &&
      localStorage.passwords.includes(password)
    ) {
      goToShop();
    } else {
      error.innerHTML = "invalid username or password ";
    }
  } else {
    error.innerHTML = "invalid username or password ";
  }
});
home.addEventListener("click", function (e) {
  e.preventDefault();
  goToHome();
});

function goToShop() {
  const name = localStorage.getItem("usernames");
  const usernames = name.split(",");
  const index = localStorage.getItem("emails").split(",").indexOf(email) + 1;
  const unameurl = "http://127.0.0.1:5500/shop.html?" + usernames[index];
  window.location.replace(unameurl);
}

function goToHome() {
  const unameurl = "http://127.0.0.1:5500/index.html";
  window.location.replace(unameurl);
}
