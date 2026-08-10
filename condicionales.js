// console.log("Script conectado correctamente");

// Estructura de control if (condición) 

// let isMember = false;

// if ( isMember ) {

//     console.log("La condición es verdadera");

// } else {

//     console.error("La condición es falsa");   

// }

// let temperatura = prompt("Ingrese su temperatura.")

// if (temperatura < 37.5) {

//     alert("Prioridad baja")

// } else {

//     alert("Prioridad alta")

// } 


let valueA = "3";
let valueB = 3;

// Comparacion simple ==
// if (valueA == valueB) {

//     console.log("Los valores son iguales cuando se hace una comparación simple '=='");

// } else {

//     console.error("Los valores son diferentes");
// }

// Comparacion estricta ===
// if (valueA === valueB) {

//     console.log("Los valores son iguales cuando se hace una comparación estricta '==='");

// } else {

//     console.error(`Los valores son diferentes: ${valueA} !== ${valueB}`);
// }


// Mini proyecto BAR
// Un usuario puede pasar al bar si tiene 18 años, pero no puede tomar alcohol hasta ser mayor de edad a los 21

let edad = prompt("Ingrese su edad");

if (edad < 18) {

    console.error(`No puede pasar al bar, es menor de edad, su edad es ${edad} años`);

} else if (edad < 21) {

    console.log("Puede pasar al bar, pero no puede tomar alcohol");

} else {

    console.log(`Puede pasar al bar y tomar alcohol, su edad es ${edad} años`);
}


if (edad >= 21) {

    alert("Puede pasar al bar.")

    let numeroSecreto = 10

    let loQueDiceElUsuario = prompt("¿Cuál es el número secreto para pasar a la zona VIP?");

    if (loQueDiceElUsuario == numeroSecreto) { 

        alert("Puede pasar a la zona VIP.") 
    
    } else { 
        
        alert("No puede pasar a la zona VIP, ese no es el número secreto.") 
    
    }

} else { 

    alert("No puede pasar al bar.") 
} 


// Preguntarle a la persona de que país procede.
// Si procede de Asia:
    // Chequeamos la temperatura.
// Si procede de Europa:
    // Chequeamos la temperatura.
// Sino, les damos la bienvenida.

let continente = prompt("Ingrese su país de procedencia");

if (continente == "Asia") {
    console.log(" por favor chequea la temperatura.");
} else if (continente == "Europa") {
    console.log(" por favor chequea la temperatura.");
} else {
    console.log("Bienvenido a Argentina.");
}