/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let contadorNegativos; 
	let contadorPositiva;
	let contadorCeros;
	let promedioPositivo;
	let promedioNegativo;
	let numerosPares
	let contadorPar
	let diferenciaPositivoyNegativo
	let mensaje


	contadorPar=0;
	contadorPositiva=0;
	contadorCeros=0;
	contadorNegativos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado =parseInt(prompt("ingresa un numero"))
		numerosPares = numeroIngresado % 2;
		if(numerosPares == 0)
		{
			contadorPar = contadorPar + 1;
		}


		if(numeroIngresado==0)
		{
			contadorCeros = contadorCeros + 1;
			contadorPositiva = contadorPositiva + 1;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				contadorPositiva = contadorPositiva + 1;
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
			else
			{
				contadorNegativos + contadorNegativos + 1;
				sumaNegativos = sumaPositivos + numeroIngresado;
			}
		}

		respuesta=prompt("desea continuar?");
	}
	//fin del while

	promedioPositivo = sumaPositivos / contadorPositiva;
	promedioNegativo = sumaNegativos / contadorNegativos;
	diferenciaPositivoyNegativo = sumaPositivos - sumaNegativos;


	mensaje =" la suma de negativos es :"+sumaNegativos;
	mensaje = mensaje +" la suma de positivos es :"+sumaPositivos;
	mensaje = mensaje +" el total de numeros negativos ingresados es:"+contadorNegativos;
	mensaje = mensaje +" el total de numeros positivos ingresados es :"+contadorPositiva;
	mensaje = mensaje +" el total de 0 ingresados es :"+contadorCeros;
	mensaje = mensaje +" el promedio  de los numeros negativos es :"+promedioNegativo;
	mensaje = mensaje +" el promedio de los numeros positivos es :"+promedioPositivo;
	mensaje = mensaje +" la diferencia entre negativo y positivo es :"+diferenciaPositivoyNegativo;
	mensaje = mensaje +" la cantidad de numeros pares ingresados es "+contadorPar;

	document.write(mensaje);
}//FIN DE LA FUNCIÓN