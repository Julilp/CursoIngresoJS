
function mostrar()
{
	let largoIngresado;
	let anchoIngresado;
	let perimetroRectangulo

	largoIngresado=parseInt(prompt("ingrese el largo del rectangulo"));
	anchoIngresado=parseInt(prompt("ingrese el ancho del rectangulo"));

	perimetroRectangulo = anchoIngresado*2 + largoIngresado*2;

	alert("el perimetro del rectangulo es "+ perimetroRectangulo); 
}
