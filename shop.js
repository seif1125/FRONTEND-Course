const data = require('./products.json');
const name=window.location.href.substr(window.location.href.indexOf('?')+1,window.location.href.length);
document.getElementById('user').innerText=name;
 document.getElementsByClassName("radios")[0].addEventListener("click",
 ()=>{
     document.getElementById("sectitle").innerText=document.getElementsByClassName("radios")[0].value;
 }
 )
  document.getElementsByClassName("radios")[1].addEventListener("click",
 ()=>{
     document.getElementById("sectitle").innerText=document.getElementsByClassName("radios")[1].value;
 }
 )
