var today = new Date();
var hourNow = today.getHours();
var greeting;
var h1 =  document.getElementById("time");

if (hourNow > 18) {
    greeting = "Boa noite, espero tenha tido um bom dia.";
} else if(hourNow >12){
  greeting = "Boa tarde, aprovei o por do sol.";
} else if (hourNow > 0) {
    greeting = "Bom dia, aproveite esse dia maravilhoso.";
} else {
greeting = "Bem vindo, e um prazer ter voce aqui";
}

h1.innerText = greeting;
