//Pedir al usuario un numero
let numero = parseInt(prompt("Por favor, ingresa un número"));
//Comprobar si el número es par o impar
if(numero % 2 === 0){
    alert("El número es par.");
} else{
    alert("El número es impar.");
}



//Pedir al usuario un año
let year = parseInt(prompt("Por favor, ingresa un año:"));
//Comprobar si el año es bisiesto
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("El año es bisiesto.");
} else{
    alert("El año no es bisiesto.");
}




//Pedir al usuario un número
letnúmero = parseInt(prompt("Por favor, ingresa un número." ));
//Comprobar si el número esta en el rango del al 100
if(numero >= 1 && numero <= 100) {
alert("El numero esta en el rango del 1 al 100.");
} else{
    alert("El número no esta en el rango del 1 al 100.");
}



//Pedir al usuario un número 
let número = parseInt(prompt("Por favor, ingrese un número:"));
//Comprobar si el número es divisible  por 3 o por 5
if (numero % 3 === 0 || numero % 5 === 0){
    alert("El numero es divisible por 3 o por 5.");
} else{
    alert("El numero no es divisible por 3 ni por 5.");
}




