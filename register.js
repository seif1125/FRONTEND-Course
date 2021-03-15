var username=document.querySelectorAll("input")[0];
var email=document.querySelectorAll("input")[1];
var password=document.querySelectorAll("input")[2];
var confirmpass=document.querySelectorAll("input")[3];
var register_btn=document.querySelectorAll("input")[4];

var error=document.getElementsByClassName("error")[0];

register_btn.addEventListener("click",(e)=>{
    e.preventDefault();
  checkValidation();
})
function checkValidation(){
 var validCharacters = /^[0-9a-zA-Z]+$/;
    if(!username.value.match(validCharacters)){
        
        error.innerHTML="Error in Register "
        return false;
    }
    else if(password.value.length<6){
        error.innerHTML="Error in Register "
        return false;
    }
    else if(password.value!=confirmpass.value){
          error.innerHTML="Error in Register"
        return false
    }
    else{
      addUserToDb();
    }
}

function addUserToDb(){
    if(localStorage.emails){
        if(localStorage.emails.includes(email.value)){
         error.innerHTML="Already Registered"
        }
        else{
        
            localStorage.emails+=`,${email.value}`;
            localStorage.usernames+=`,${username.value}`;
            localStorage.passwords+=`,${password.value}`;
           goToShop()
        }

    }
    else{
            localStorage.setItem("emails",[])
            localStorage.setItem("usernames",[])
            localStorage.setItem("passwords",[])
            localStorage.emails+=`...,${email.value}`;
            localStorage.usernames+=`...,${username.value}`;
            localStorage.passwords+=`...,${password.value}`;
            goToShop()
           
    }

}

function goToShop(){
     
      window.location.replace(`http://127.0.0.1:5500/shop.html?${username.value.substr(0,7)}`);
}

