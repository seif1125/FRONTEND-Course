let allLinks=document.querySelectorAll("a");


  

if(window.location.href.includes("login.html")){
    allLinks[0].classList.add("selected")

  allLinks[1].classList.remove("selected")
}
else if(window.location.href.includes("register.html")){
       allLinks[1].classList.add("selected")

  allLinks[0].classList.remove("selected")
}


function goToHomePage(){
    window.location.href="index.html"
}







