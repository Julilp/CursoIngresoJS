function mostrar()
{
	let precioIngresado
	let descuento
	let precioFinal

	precioIngresado=parseInt(prompt("ingrese el precio"));
	descuento=parseInt(prompt("ingrese el porcentaje de descuentoa aplicar"));

	precioFinal = descuento * precioIngresado / 100;

	document.getElementById('elPrecioFinal').value=precioFinal;

}
