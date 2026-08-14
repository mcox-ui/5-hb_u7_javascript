// https://pledu.plataforma5.la/curso-introductorio-frontend-st-brendans/u8---conditional-statements/**-*puedo-jubilarme*-5043649c

// Parte 1
// En este ejercicio, crearás un programa que le indique a las mujeres si están en edad, o no, de jubilarse.

// ⚠️ Importante: En Argentina, las mujeres pueden jubilarse a los 60 años.

// Pedile al usuario que ingrese su edad y guardá este valor en una Variable. A partir de ese input, informale si puede jubilarse o no.

// Parte 2
// En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como a los hombres, si están en edad de jubilarse.


// ⚠️ Importante: En Argentina, los hombres pueden jubilarse a los 65 años.

// Para esto, además de preguntar la edad del usuario deberás confirmar si es hombre o mujer.
// Te recomendamos empezar con dos bloques if.

// Extra Bonus
// Optimizá tu código de modo que, todo el ejercicio, se resuelva con un solo if. Usá operadores lógicos y de relación.

let edad = prompt("Ingrese su edad");
let genero = prompt("Ingrese su género (hombre/mujer)").toLowerCase();

if (genero === "mujer" && edad >= 60) {

    alert("Usted puede jubilarse.");
    console.log(`Usted es ${genero} y tiene ${edad} años y puede jubilarse.`);

} else if (genero === "hombre" && edad >= 65) {

    alert("Usted puede jubilarse.");
    console.log(`Usted es ${genero}, tiene ${edad} años y puede jubilarse.`);

} else {
    alert("Usted aún no puede jubilarse.");
    console.log(`Usted es ${genero} y tiene ${edad} años y no puede jubilarse.`);
}