//For

for (let i = 0; i < 10; i=i +2) {
    console.log("Calishouse", i);
    
}

for (let i = 1; i < 3; i++) {
    alert ("BIENVENIDOS A CALISHOUSE");   
}

/* let numero = parseInt(prompt("Ingresa un numero"));

for (let i = 1; i <=10; i++) {

    let result=numero * i

    if ( i ===8 ) {
        break;
    }

    alert(numero + "X" + i + "=" + result );

} */

//While

let usuario = prompt ("Ingrese su usuario");

while (usuario !="guillermo"){
    alert ("Usuario incorrecto");

    let usuario = prompt ("Ingrese su usuario");
}

alert ("Usuario correcto");

//Funcion de suma

function calcular (x,z,y) {
    let suma = x + y 
    let resultado = suma * z
    return resultado
}

console.log(calcular(2,3,2));

//Cuenta de Stock de ventas

const stock = (x,y) => x - y ;

let stockInicial = 20;
let stockFinal = 5;

let planesVendida = stock(stockInicial,stockFinal);


console.log(planesVendida);

//Arrays

/* const productos1 = ["principiante","medio","avanzado"];

const eliminar = (nombre) => {
    let index = productos1.indexOf(nombre);

    if(index != -1 ){
        productos1.slice (index , 1);
    }

    console.log(productos1);
}

eliminar("avanzado");

class Ejercicio {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const ejercicios = [];

ejercicios.push(new Ejercicio ("front" , 1000));
ejercicios.push(new Ejercicio ("plancha" , 2000));
ejercicios.push(new Ejercicio ("bandera" , 3000));

for ( const ejercicios of ejercicios) {
    console.log(ejercicios);
} */


//Funciones de orden superior

const productos = [
    {nombre : "principiante", precio: 2000},
    {nombre : "medio", precio: 4000},
    {nombre : "avanzado", precio: 6000},
]


let busqueda  = prompt ("Precio de los planes (principiante.medio,avanzado): Ingrese el deseado").toLowerCase()

let  producto = productos.find(elemento => elemento.nombre === busqueda);
alert (`El precio del plan ${busqueda} es ${producto.precio}`);

const carrito  = [  
    {nombre : "principiante", precio: 2000},
    {nombre : "medio", precio: 4000},
    {nombre : "avanzado", precio: 6000},
];

const total = carrito.reduce((acumulador,elemento)=>acumulador + elemento.precio,0);

let carro = prompt ("Escriba TOTAL para ver el precio del paquete completo")

alert (`El total es ${total}`)



