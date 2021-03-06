let email=document.querySelectorAll("input")[0].value;
let password=document.querySelectorAll("input")[1].value;

let register_btn=document.querySelectorAll("input")[2];
let error=document.getElementsByClassName("error")[0];

register_btn.addEventListener("click",function(e){
   //let email=localStorage.emails.split(",")
    console.log(email)
e.preventDefault();

if(localStorage.emails.includes(document.querySelectorAll("input")[0].value)&&localStorage.passwords.includes(document.querySelectorAll("input")[1].value)){
    goToShop();
}
else{
  error.innerHTML="invalid username or password "
}
})

function goToShop(){
  const unameurl="http://127.0.0.1:5500/shop.html?"+document.querySelectorAll("input")[0].value.substr(0,7);
  window.location.replace(unameurl);
 

}



