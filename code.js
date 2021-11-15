//Desafío 1: Crear un algoritmo JS simple 

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

//Desafío 2: Crear un algoritmo con condicional 
/*a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”*/

/*let diametroRueda = parseFloat(prompt("Ingrese diametro de rueda"));

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
}*/

//Desafio 3: Ciclos / Iteraciones


/*//Ejercicio uno
sumaDePeso = 0
for (let i = 1; i <= 10; i++) {
    let pesoAnimal = parseFloat(prompt("Ingrese peso de animal " + i + " en kgs"));
 sumaDePeso += pesoAnimal;
}

console.log("La suma total de los animales a llevar es: " + sumaTotal + " kilogramos");

//Peso limite para llevar en camión
if (sumaTotal > 1000) {
    console.log("Sobrecarga - No puede pasar");
}  else {
    console.log("Peso Apto - Puede pasar");
}

// Ejercicio dos
let producto = prompt("Ingresar producto vendido - ESC para finalizar");
let precio = parseFloat(prompt("Ingresar precio producto"))

while (producto !== "ESC" && precio !== "ESC")  {
    console.log("El precio de " + producto + " es $" + precio );
    producto = prompt("Ingresar otro producto vendido - ESC para finalizar");
    if (producto !== "ESC"){
        precio = parseFloat(prompt("Ingresar precio otro producto"));
    }
}
*/
//Desafio 4 - Simulador Interactivo

//Aca queria hacer una funcion que pida el producto y desde el producto ingresado sacar el precio. Cuando puedas me
//ayudas como le hago.
//ya este en una funcion de calculo de precio

function calcularPrecioConIva (precioProducto){
  let iva = (precioProducto*21)/100;
  let precioConIva=precioProducto+iva;
  return precioConIva;
}

let precioFinal = calcularPrecioConIva(parseFloat(prompt("Ingrese precio: "))); //Aca queria poner el precio obtenido en la primer funcion
console.log(precioFinal);



 



