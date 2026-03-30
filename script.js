console.log("Website Loaded");
/* DARK MODE */

const toggle =
document.getElementById("darkToggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

};

/* LOAD DARK MODE */

if(localStorage.getItem("darkMode") === "true"){

document.body.classList.add("dark");

}

/* SLIDER */

let slides =
document.querySelectorAll(".slide");

let index = 0;

function showSlide(){

slides.forEach(s =>
s.classList.remove("active")
);

index++;

if(index >= slides.length){

index = 0;

}

slides[index].classList.add("active");

}

setInterval(showSlide,4000);

/* SCROLL REVEAL */

function reveal(){

let reveals =
document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight =
window.innerHeight;

let elementTop =
reveals[i]
.getBoundingClientRect().top;

if(elementTop < windowHeight-100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);
