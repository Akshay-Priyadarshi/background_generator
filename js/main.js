var body = document.querySelector("body");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");

function applyGradient(){
    body.style.backgroundImage = "linear-gradient(to right,"+c1.value+","+c2.value+")";
    h3.textContent = body.style.backgroundImage + ";";
}

c1.addEventListener("input",applyGradient);
c2.addEventListener("input",applyGradient);


