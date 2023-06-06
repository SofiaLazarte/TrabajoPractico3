//punto uno
/*
let meses = ["", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let listameses = meses.join ("<br>"+"•" );

document.write( "Lista de Meses"+ "<br>"+ listameses );
*/

//punto dos

let arrayCiudad = [];
do 
{
    let ciudad = prompt("Escriba una ciudad")
    arrayCiudad.push(ciudad); 
    

} 
while (confirm ("Quiere seguir ingresando?") == true);



document.write("El arreglo tiene " + arrayCiudad.length + " elementos" + "<br> <br>");

document.write("Elemento 1er posicion: " + arrayCiudad[0] + "<br>");

document.write("Elemento 3ra posicion: " + arrayCiudad[2] + "<br>");


document.write("Elemento ultima posicion: " + arrayCiudad[arrayCiudad.length - 1] + "<br>");

arrayCiudad.push("Paris");

document.write("Elemento ultima posicion: " + arrayCiudad[arrayCiudad.length - 1] + "<br> ");

document.write("Elemento 2ra posicion: " + arrayCiudad[1] + "<br> <br>");

let lista = arrayCiudad.join("<br>"+"•" );

document.write("Arreglo de Ciudades" + "<br>"  +"•"+ lista);