/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
	var largoDelTerreno;
	var anchoDelTerreno;
	

function Rectangulo () 
{ //declaro mis variables 
	let perimetroDelTerreno
	let cantidadDeAlambre
//extraigo datos de las cajas
	largoDelTerreno=parseInt(document.getElementById('txtIdLargo').value);
	anchoDelTerreno=parseInt(document.getElementById('txtIdAncho').value);
//hago las cuentas
	perimetroDelTerreno=largoDelTerreno*2+anchoDelTerreno*2;
	cantidadDeAlambre= perimetroDelTerreno*3;
//ahhora imprimo el resultado
	//alert(perimetroDelTerreno);
	alert("La cantidad necesaria de alambre es "+cantidadDeAlambre);
}
function Circulo () 
{//declaro variables
	let radioDelTerreno;
	let perimetroCirculo;
	let cantidadDeAlambr;
//extraigo el valor de la caja
	radioDelTerreno=parseInt(document.getElementById('txtIdRadio').value);
//hago las cuentas
	perimetroCirculo=2*Math.PI*radioDelTerreno;
	cantidadDeAlambr= perimetroCirculo*3;
	alert("La cantidad necesaria de alambre es "+cantidadDeAlambr);

}
function Materiales () 
{
	let areaDelTerreno;
	let bolsaDeCemento;
	let bolsaDeCal;
	let mensaje;
	//extraigo datos de las cajas
	largoDelTerreno=parseInt(document.getElementById('txtIdLargo').value);
	anchoDelTerreno=parseInt(document.getElementById('txtIdAncho').value);

	areaDelTerreno=largoDelTerreno*anchoDelTerreno;
	bolsaDeCemento=areaDelTerreno*2;
	bolsaDeCal=areaDelTerreno*3;

	mensaje="Bolsas necesarias: "+bolsaDeCemento+" de cemento";
	mensaje=mensaje+" y "+bolsaDeCal+" de cal";
	alert(mensaje);
	
}
/*
txtIdLargo
txtIdAncho
txtIdRadio
*/