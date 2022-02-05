/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ 
	/*
	//declaro las variables
	let sueldo;
	let resultado;
	//extraigo el sueldo de la caja
	sueldo=parseInt(document.getElementById('txtIdSueldo').value);
	//hacemos la operacion matematica
	//"1.10" hace referencia al 10% sumado al sueldo
	resultado=sueldo * 1.10;
	//devolvemos el resutado en la caja
	document.getElementById('txtIdResultado').value = resultado;
*/
/*
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/
	//declaro las variables
	let sueldo;
	let porcentaje;
	let resultado;
	let mensaje;
	let aumento
	//extraigo el sueldo de la caja
	sueldo=parseInt(document.getElementById('txtIdSueldo').value);
	porcentaje=parseInt(prompt("ingrese el % de aumento que desea"))
	//hacemos la operacion matematica
	aumento=sueldo*(porcentaje/100);
	resultado=sueldo+aumento
	//devolvemos el resutado en la caja
	document.getElementById('txtIdResultado').value = resultado;
	mensaje="su sueldo ingresado es "+sueldo;
	mensaje=mensaje+" a este se le realizo un aumento del "+porcentaje+"% que es un total de "+aumento;
	mensaje=mensaje+" lo que nos da un nuevo sueldo que es igual a "+resultado;
	alert(mensaje);


}


