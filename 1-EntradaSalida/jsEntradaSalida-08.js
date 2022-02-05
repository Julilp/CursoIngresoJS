/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let resultadoResta;
	//extraigo datos y parseo
	numeroUno=parseInt(document.getElementById('txtIdNumeroDividendo').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDivisor').value);
	//calculo matematico
	resultadoResta = numeroUno%numeroDos;
	//mensaje de resultado
	alert("El resto de la division es "+resultadoResta);
	
}
