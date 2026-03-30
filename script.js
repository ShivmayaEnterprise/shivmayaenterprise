console.log("Website Loaded");
/* DARK MODE */

const toggle =
document.getElementById("darkToggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

toggle.innerText="☀️";

}else{

toggle.innerText="🌙";

}

};

/* SCROLL REVEAL */

function reveal(){

let reveals =
document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight =
window.innerHeight;

let elementTop =
reveals[i].getBoundingClientRect().top;

if(elementTop < windowHeight-100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

/* SCROLL FUNCTIONS */

function scrollToMap(){

document
.querySelector(".map")
.scrollIntoView({

behavior:"smooth"

});

}

function scrollToChannel(){

document
.querySelector(".qr-section")
.scrollIntoView({

behavior:"smooth"

});

}
