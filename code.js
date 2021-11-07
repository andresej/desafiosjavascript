//Desafío: Crear un algoritmo JS simple 1

/*let usuario = prompt("Ingrese su nombre");
let lugarDeNacimiento = prompt("Ingrese lugar de nacimiento");
let edad = parseInt( prompt("Ingrese edad"));
console.log("Hola! " + usuario);
console.log(
    usuario + 
    " nació en " +
    lugarDeNacimiento +
    " y tiene " +
    edad +
    " años de edad"
);*/

//Desafío: Crear un algoritmo con condicional 2
/*a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”*/

let diametroRueda = parseFloat(prompt("Ingrese diametro de rueda"));

if (diametroRueda > 1.4) {
    console.log("La rueda es para un vehículo grande");
} else if (diametroRueda <= 1.4 && diametroRueda > 0.8) {
    console.log("La rueda es para vehículo mediado");
} else {
    console.log("La rueda es para vehiculo pequeño");
}

let grosorRueda = parseFloat(prompt("Ingrese grosor de rueda"));

if (
    (diametroRueda > 1.4 && grosorRueda < 0.4) ||
    (diametroRueda <= 1.4 && diametroRueda > 0.8 && grosorRueda < 0.25)
) {
    console.log("El grosor para esta rueda es inferior al recomendado");
} else {
    console.log("El grosor para esta rueda es adecuado");
}