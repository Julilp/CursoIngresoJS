/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
//declaro variables
	let numeroUno;
	let NumeroDos;
	let resultado;

//extraigo el valor de los box t con parseint los declaro numeros
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	NumeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);
//hago la suma
	resultado = numeroUno + NumeroDos;

	alert("el resultado de la suma es " +resultado);
}


/*
txtIdNumeroUno
txtIdNumeroDos
*/