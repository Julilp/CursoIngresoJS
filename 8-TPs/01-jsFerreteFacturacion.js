/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	var datoIngresadoUno;
	var datoIngresadoDos;
	var datoIngresadoTres;

function Sumar () 
{
	
	let resultadoSuma;

	datoIngresadoUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	datoIngresadoDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	datoIngresadoTres=parseInt(document.getElementById('txtIdPrecioTres').value);
	resultadoSuma=datoIngresadoUno+datoIngresadoDos+datoIngresadoTres;

	alert("El resultado de la suma es " +resultadoSuma);

}
function Promedio () 
{
	let resultadoPromedio;
	

	datoIngresadoUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	datoIngresadoDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	datoIngresadoTres=parseInt(document.getElementById('txtIdPrecioTres').value);

	resultadoSuma=datoIngresadoUno+datoIngresadoDos+datoIngresadoTres;
	resultadoPromedio=resultadoSuma/3;


	alert("El resultado del promedio es " +resultadoPromedio);

}
function PrecioFinal () 
{
	
	let precioFinal;


	datoIngresadoUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	datoIngresadoDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	datoIngresadoTres=parseInt(document.getElementById('txtIdPrecioTres').value);

	resultadoSuma=datoIngresadoUno+datoIngresadoDos+datoIngresadoTres;
	precioFinal=resultadoSuma*1.21;


	alert("El precio final es "+precioFinal);

}