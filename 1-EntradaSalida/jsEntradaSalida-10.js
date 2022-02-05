/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
tomar el descuento por prompt y mostrar el resultado concatenado por alert
ejemplo "su monto total es 750 y se le hizo un descuento del 25% usted ingreso 1000"
*/

function mostrarAumento()
{
	/*
	//DE3CLARE LAS VARIABLES
	let importe;
	let descuento;
	let resultado;
	//tomamos los datos del box
	importe=parseInt(document.getElementById('txtIdImporte').value);
	//hacemos las cuentas para obtener el descuento
	//y despues descontamos
	descuento = importe * 0.25;
	resultado = importe - descuento;
	//devolvemos el resultado al box
	document.getElementById('txtIdResultado').value = resultado;
	//alert("el descuento fue de "+descuento);
*/
	let importe;
	let porcentaje;
	let importeConDescuento;
	let descuento;
	let mensaje;

	importe=parseInt(document.getElementById('txtIdImporte').value);
	porcentaje=parseInt(prompt("ingrese el porcentaje de descuento que desea aplicar"));
	importeConDescuento=importe*(porcentaje/100);
	descuento= importe-importeConDescuento;

	mensaje="usted ingreso un valor total de "+importe;
	mensaje=mensaje+" al que se le realizo un descuento del "+porcentaje+"% lo que nos da un descuento de "+descuento;
	mensaje=mensaje+" nos queda un valor total de "+importeConDescuento;

	alert(mensaje);



}
//txtIdImporte
//txtIdResultado