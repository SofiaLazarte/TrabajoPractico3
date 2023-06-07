//punto uno
/*
let meses = ["", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let listameses = meses.join ("<br>"+"•" );

document.write( "Lista de Meses"+ "<br>"+ listameses );


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


//punto tres

let sumas = []; let dos = 0; let tres = 0; let cuatro = 0; let cinco = 0; let seis = 0; let siete = 0; let ocho = 0; let nueve = 0; let diez = 0; let once = 0; let doce = 0;

for (let i = 0; i < 50; i++) 
{
    let dadoUno = parseInt(Math.random() * (7 - 1) + 1);
    let dadoDos = parseInt(Math.random() * (7 - 1) + 1);

    let suma = dadoUno + dadoDos;

    switch (suma) {
        case 2:
            dos = dos + 1;
            break;
        case 3:
            tres = tres + 1;
            break;
        case 4:
            cuatro = cuatro + 1;
            break;
        case 5:
            cinco = cinco + 1;
            break; 
        case 6:
            seis = seis + 1;
            break; 
        case 7:
            siete = siete + 1;
            break;
        case 8:
            ocho = ocho + 1;
            break;
        case 9:
            nueve = nueve + 1;
            break;
        case 10:
            diez = diez + 1;
            break; 
        case 11:
            once = once + 1;
            break; 
        case 12:
            doce = doce + 1;
            break; 

        default:
        break;
    }
}

document.write("2: "+ dos + "<br>" + "3: "+ tres + "<br>" + "4: "+ cuatro + "<br>" + "5: "+ cinco + "<br>" + "6: "+ seis + "<br>" + "7: "+ siete + "<br>" + "8: "+ ocho + "<br>" + "9: "+ nueve + "<br>" + "10: "+ diez + "<br>" + "11: "+ once + "<br>" + "12: "+ doce + "<br>" );
*/

//punto cuatro

function esPar(numero) {
    if (numero % 2 == 0) 
    {
        document.write("es par")
    }
    else 
    {
        document.write("es impar")
    }
}

esPar(5);