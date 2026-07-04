const ingredientsBtn=document.getElementById("ingredientsBtn");

const stepsBtn=document.getElementById("stepsBtn");

const ingredients=document.getElementById("ingredients");

const steps=document.getElementById("steps");

ingredientsBtn.onclick=()=>{

ingredients.classList.toggle("hidden");

}

stepsBtn.onclick=()=>{

steps.classList.toggle("hidden");

}

const list=document.querySelectorAll("#stepList li");

const progress=document.getElementById("progressBar");

let current=-1;

document.getElementById("startBtn").onclick=function(){

current=0;

updateSteps();

startTimer();

}

document.getElementById("nextBtn").onclick=function(){

if(current<list.length-1){

current++;

updateSteps();

}

}

function updateSteps(){

list.forEach(item=>item.classList.remove("current"));

if(current>=0){

list[current].classList.add("current");

}

let percent=((current+1)/list.length)*100;

progress.style.width=percent+"%";

}

let total=2700;

let started=false;

function startTimer(){

if(started) return;

started=true;

const timer=document.getElementById("timer");

setInterval(()=>{

if(total>0){

total--;

}

let m=Math.floor(total/60);

let s=total%60;

timer.innerHTML=

String(m).padStart(2,'0')+

":"+

String(s).padStart(2,'0');

},1000);

}