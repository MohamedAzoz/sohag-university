"use stract";
let btn = document.querySelector("#btn");
let cl = document.querySelector("#cl");
let pr = document.querySelector("#pro");
let btn1 = document.querySelector("#btn1");
let cl1 = document.querySelector("#cl1");
let pr1 = document.querySelector("#pro1");
let btn2 = document.querySelector("#btn2");
let cl2 = document.querySelector("#cl2");
let pr2 = document.querySelector("#pro2");
let btn3 = document.querySelector("#btn3");
let cl3 = document.querySelector("#cl3");
let pr3 = document.querySelector("#pro3");
let btn4 = document.querySelector("#btn4");
let cl4 = document.querySelector("#cl4");
let pr4 = document.querySelector("#pro4");
let galry = document.getElementById("galry");
let icwn = document.querySelector(".icwn");
let nav = document.querySelector("#nav");

function icown(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >=0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var iconsl = document.querySelectorAll('.ic');
    
    iconsl.forEach(function(icon) {
      if (icown(icon)) {
        icon.classList.add("icsh");
      }
    });
  });

function isInViewport(ele) {
    const re = ele.getBoundingClientRect();
    return (
      re.bottom >=30 &&
      re.right >= 0 &&
      re.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      re.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var iconsl = document.querySelectorAll('.disl');
    
    iconsl.forEach(function(icon) {
      if (isInViewport(icon)) {
        icon.classList.add("showl");
      }
    });
  });

function isright(e) {
    const rect = e.getBoundingClientRect();
    return (
      rect.bottom >=30 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var iconsr = document.querySelectorAll('.disr');
    
    iconsr.forEach(function(icon) {
      if (isright(icon)) {
        icon.classList.add('showr');
      }
    });
  });
function iscent(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom >=30 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var iconsc = document.querySelectorAll('.disc');
    
    iconsc.forEach(function(icon) {
      if (iscent(icon)) {
        icon.classList.add('showc');
      }
    });
  });
  
addEventListener("scroll",function(){
    if (window.scrollY > 30) {
        nav.style.boxShadow="0 1px 0 0 rgba(139, 141, 157, .05), 0 5px 10px 0 rgba(65, 71, 108, .15)";
      } else {
        nav.style.boxShadow="none";

      }
    
});

let arrcolors = [];
arrcolors[0] = "linear-gradient(0deg, #9B9B9B, #3054F2 )";
arrcolors[1] = "linear-gradient(45deg, #9B9B9B, #3054F2 )";
arrcolors[2] = "linear-gradient(90deg, #9B9B9B, #3054F2 )";
arrcolors[3] = "linear-gradient(135deg, #9B9B9B, #3054F2)";
arrcolors[4] = "linear-gradient(180deg, #9B9B9B, #3054F2)";
arrcolors[5] = "linear-gradient(225deg, #9B9B9B, #3054F2)";
arrcolors[6] = "linear-gradient(270deg, #9B9B9B, #3054F2)";
arrcolors[7] = "linear-gradient(315deg, #9B9B9B, #3054F2)";
arrcolors[8] = "linear-gradient(360deg, #9B9B9B, #3054F2)";
var counter = 0;

function colofunc() {
    if (counter < 9) {
        galry.style.transition = "background-image 1.5s";
        galry.style.backgroundImage = arrcolors[counter];
        counter++;
    } else {
        counter = 0;
    }
}
setInterval(colofunc, 1000);

function refresh(){
    location.reload();
}

pr.classList.add("d");
btn.onclick = function() {
    pr.classList.toggle("d");
}
cl.onclick = function() {
    pr.classList.add("d");
}

pr1.classList.add("d");
btn1.onclick = function() {
    pr1.classList.toggle("d");
}
cl1.onclick = function() {
    pr1.classList.add("d");
}

pr2.classList.add("d");
btn2.onclick = function() {
    pr2.classList.toggle("d");
}
cl2.onclick = function() {
    pr2.classList.add("d");
}

pr3.classList.add("d");
btn3.onclick = function() {
    pr3.classList.toggle("d");
}
cl3.onclick = function() {
    pr3.classList.add("d");
}

pr4.classList.add("d");
btn4.onclick = function() {
    pr4.classList.toggle("d");
}
cl4.onclick = function() {
    pr4.classList.add("d");
}