// const inputName = document.querySelector("inputname");
// const buttonUp  = document.querySelector("Submitbtn");
const grtmg   = document.getElementById("Popupmessage");
const h1ele   = document.getElementById("nott");
const inp     = document.getElementById("input");


function getInputvalue(){
   let inputval = document.getElementsByClassName("inputname")[0].value;
   document.getElementById("greetings").innerHTML=("Welcome"+"   "+inputval+"  !!")
   grtmg.style.display= "block";
   inp.style.display="none";
   h1ele.innerHTML=("");

}

// function displayBlk(){
//     grtmg.style.display= "block";
// }