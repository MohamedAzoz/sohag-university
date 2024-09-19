"use stract";
let btn = document.querySelector("#btn");
let pr = document.querySelector("#pro");
let btn1 = document.querySelector("#btn1");
let pr1 = document.querySelector("#pro1");
let btn2 = document.querySelector("#btn2");
let pr2 = document.querySelector("#pro2");
let btn3 = document.querySelector("#btn3");
let pr3 = document.querySelector("#pro3");
let btn4 = document.querySelector("#btn4");
let pr4 = document.querySelector("#pro4");
let btn5 = document.querySelector("#btn5");
let pr5 = document.querySelector("#pro5");
let btn6 = document.querySelector("#btn6");
let pr6 = document.querySelector("#pro6");
let btn7 = document.querySelector("#btn7");
let pr7 = document.querySelector("#pro7");
let btn8 = document.querySelector("#btn8");
let pr8 = document.querySelector("#pro8");
let btn9 = document.querySelector("#btn9");
let pr9 = document.querySelector("#pro9");
let btn10 = document.querySelector("#btn10");
let pr10 = document.querySelector("#pro10");
let btn11 = document.querySelector("#btn11");
let pr11 = document.querySelector("#pro11");
let btn12 = document.querySelector("#btn12");
let pr12 = document.querySelector("#pro12");
let btn13 = document.querySelector("#btn13");
let pr13 = document.querySelector("#pro13");
let btn14 = document.querySelector("#btn14");
let pr14 = document.querySelector("#pro14");
let btn15 = document.querySelector("#btn15");
let pr15 = document.querySelector("#pro15");
let btn16 = document.querySelector("#btn16");
let pr16 = document.querySelector("#pro16");
let btn17 = document.querySelector("#btn17");
let pr17 = document.querySelector("#pro17");
let btn18 = document.querySelector("#btn18");
let pr18 = document.querySelector("#pro18");
let btn19 = document.querySelector("#btn19");
let pr19 = document.querySelector("#pro19");
let btn20 = document.querySelector("#btn20");
let pr20 = document.querySelector("#pro20");
let btn21 = document.querySelector("#btn21");
let pr21 = document.querySelector("#pro21");
let btn22 = document.querySelector("#btn22");
let pr22 = document.querySelector("#pro22");
let btn23 = document.querySelector("#btn23");
let pr23 = document.querySelector("#pro23");
let btn24 = document.querySelector("#btn24");
let pr24 = document.querySelector("#pro24");
let btn25 = document.querySelector("#btn25");
let pr25 = document.querySelector("#pro25");
let btn26 = document.querySelector("#btn26");
let pr26 = document.querySelector("#pro26");
let btn27 = document.querySelector("#btn27");
let pr27 = document.querySelector("#pro27");
let btn28 = document.querySelector("#btn28");
let pr28 = document.querySelector("#pro28");
let btn29 = document.querySelector("#btn29");
let pr29 = document.querySelector("#pro29");
let all1=document.getElementById("all1");
let all2=document.getElementById("all2");
let all3=document.getElementById("all3");
let all4=document.getElementById("all4");
let all5=document.getElementById("all5");

btn.onclick = function() {
    pr.classList.toggle("d");
}
btn1.onclick = function() {
    if(pr6.classList.contains("d")===false && pr1.classList.contains("d"))
        {
            pr6.classList.toggle("d");  
            pr1.classList.toggle("d");  
        }
        else if(pr6.classList.contains("d") && pr1.classList.contains("d"))
            {
                pr1.classList.toggle("d");  
        } 
        else{
            pr1.classList.toggle("d");  
         }
}
btn2.onclick = function() {
    pr2.classList.toggle("d");  
}
btn3.onclick = function() {
    pr3.classList.toggle("d");
}
btn4.onclick = function() {
    pr4.classList.toggle("d");
}
btn5.onclick = function() {
    pr5.classList.toggle("d");
}

btn6.onclick = function() {
    if(pr6.classList.contains("d") && pr1.classList.contains("d")===false)
        {
           pr1.classList.toggle("d");  
           pr6.classList.toggle("d");  
        }
       else if(pr6.classList.contains("d") && pr1.classList.contains("d"))
            {
                pr6.classList.toggle("d");  
        }
        else{
            pr6.classList.toggle("d");  
        }

}

btn7.onclick = function() {
    pr7.classList.toggle("d");  
}

btn8.onclick = function() {
    pr8.classList.toggle("d");
}

btn9.onclick = function() {
    pr9.classList.toggle("d");
}

btn10.onclick = function() {
    pr10.classList.toggle("d");
}

btn11.onclick = function() {
    pr11.classList.toggle("d");
}
btn12.onclick = function() {
    pr12.classList.toggle("d");
}
btn13.onclick = function() {
    pr13.classList.toggle("d");
}
btn14.onclick = function() {
    pr14.classList.toggle("d");
}
btn15.onclick = function() {
    pr15.classList.toggle("d");
}
btn16.onclick = function() {
    pr16.classList.toggle("d");
}
btn17.onclick = function() {
    pr17.classList.toggle("d");
}
btn18.onclick = function() {
    pr18.classList.toggle("d");
}
btn19.onclick = function() {
    pr18.classList.toggle("d");
}
btn20.onclick = function() {
    pr20.classList.toggle("d");
}
btn21.onclick = function() {
    pr21.classList.toggle("d");
}
btn22.onclick = function() {
    pr22.classList.toggle("d");
}
btn23.onclick = function() {
    pr23.classList.toggle("d");
}
btn24.onclick = function() {
    pr24.classList.toggle("d");
}
btn25.onclick = function() {
    pr25.classList.toggle("d");
}
btn26.onclick = function() {
    pr26.classList.toggle("d");
}
btn27.onclick = function() {
    pr27.classList.toggle("d");
}
btn28.onclick = function() {
    pr28.classList.toggle("d");
}
btn29.onclick = function() {
    pr29.classList.toggle("d");
}
function All1fun(){
    all1.classList.toggle("d")
}
function All2fun(){
    all2.classList.toggle("d")
}
function All3fun(){
    all3.classList.toggle("d")
}
function All4fun(){
    all4.classList.toggle("d")
}
function All5fun(){
    all5.classList.toggle("d")
}