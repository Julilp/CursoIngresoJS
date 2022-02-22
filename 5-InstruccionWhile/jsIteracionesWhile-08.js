/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	let numeroIngresado

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado =parseInt(prompt("ingresa un numero"))
		if(numeroIngresado > -1)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = prompt("quiere continuar?")
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN