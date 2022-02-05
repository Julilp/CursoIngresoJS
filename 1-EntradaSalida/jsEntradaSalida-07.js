/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//declaro variables
	let numeroUno;
	let numeroDos;
	let resultadoSuma;
	//extraigo datos y parseo
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);
	//calculo matematico
	resultadoSuma = numeroUno + numeroDos;
	//mensaje de resultado
	alert("El resultado de la suma es "+resultadoSuma);

}

function restar()
{
	let resultadoResta;
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);

	resultadoResta = numeroUno - numeroDos;

	alert("El resultado de la resta es "+resultadoResta);

	
}

function multiplicar()
{ 
	let resultadoMultiplicaciion;
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);
	resultadoMultiplicaciion = numeroUno * numeroDos;
	alert("el resultado de la multiplicacion es "+resultadoMultiplicaciion)

}

function dividir()
{
	let resultadoDivision;
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);
	resultadoDivision = numeroUno/numeroDos;
	alert("el resultado de la division es "+resultadoDivision);




}	

/*
txtIdNumeroUno
txtIdNumeroDos
*/