/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let edadIngresada;
	let temperaturaIngresada;
	let nombreIngresado;

	let notaIngresado;
	let contadorDeAprobados=0;

	let sexoIngresado;
	let contadorFemenino=0; 
	let contadorMasculino=0;
	let contadorNoBinario=0;

	let alturaIngresada;
	let promedioAltura;
	let sumaDeAltura = 0;

	let contador190F=0;

	let bandera = "bandera1";

	let alturaMax;
	let nombreDelAlto;

	let primerFiebre = "Fiebre";
	let edadFiebre;

	let mensaje;

	let sexoMas;

	let alturaAprobados = 0;
	let promedioAlturaAprobado;

	let primerFAprobado = "aprobado";
	let nombrePrimerAprobada;

	let primerEnano = "sos enano";
	let nombreEnano;

	while(contador < 5)
	{
		nombreIngresado= prompt("ingrese su nombre");

		alturaIngresada = parseInt(prompt("ingrese la altura en centimetros esta debe estar entre 0 y 250"));
		while(alturaIngresada < 0 || alturaIngresada > 250)
		{
			alturaIngresada = parseInt(prompt("ERROR, ingrese la altura en centimetros esta DEBE ESTAR ENTRE 0 y 250"));
		}
		sumaDeAltura= sumaDeAltura + alturaIngresada; // Ejercicio A

		edadIngresada = parseInt(prompt("ingrese la edad esta debe estar entre 17 y 80"));
		while(edadIngresada < 17 || edadIngresada > 80)
		{
			edadIngresada = parseInt(prompt("ERROR, ingrese la edad ESTA DEBE ESTAR ENTRE 17 y 80"));
		}

		temperaturaIngresada = parseInt(prompt("ingrese su temperatura esta debe estar entre 26 y 45"));
		while(temperaturaIngresada < 26 || temperaturaIngresada > 45)
		{
			temperaturaIngresada = parseInt(prompt("ERROR, ingrese la temperatura ESTA DEBE ESTAR ENTRE 26 y 45"));
		}

		sexoIngresado = prompt("ingrese el sexo, este debe ser f, m o nb");
		while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb" )
		{
			sexoIngresado = prompt("ingrese el sexo, este debe ser f, m o nb");
		}

		if (sexoIngresado == "f") //Ejercicio B
		 {
		 	contadorFemenino = contadorFemenino + 1; //Ejercicio B
		 	if (alturaIngresada>190)
		 	 {
		 	 	contador190F = contador190F + 1; //Ejercicio D
		 	 }
		 }
		 else
		 {
		 	if(sexoIngresado == "m") //Ejercicio B
		 	{
		 		contadorMasculino = contadorMasculino + 1; //Ejercicio B
		 	}
		 	else
		 	{
		 		contadorNoBinario = contadorNoBinario + 1; //Ejercicio B
		 	}
		 }


		notaIngresado = parseInt(prompt("ingrese la nota esta debe estar entre 1 y 10"));
		while(notaIngresado < 1 || notaIngresado > 10)
		{
			notaIngresado = parseInt(prompt("ERROR, ingrese la nota esta debe estar entre 1 y 10"));
		}

		if(notaIngresado > 6) //Ejercicio C
		{
			contadorDeAprobados = contadorDeAprobados + 1; //Ejercicio C
			alturaAprobados = contadorDeAprobados + alturaIngresada;
		}

		if(bandera == "bandera1")
		{
			bandera = "listo"
			alturaMax = alturaIngresada;
			nombreDelAlto = nombreIngresado; 
		}

		if (alturaIngresada > alturaMax)
		 {
		 	alturaMax = alturaIngresada;
			nombreDelAlto = nombreIngresado; 
		 }

		 if (temperaturaIngresada > 37 && primerFiebre == "Fiebre")
		  {
		  	primerFiebre = "listo";
		  	edadFiebre = edadIngresada;
		  }

		  if(sexoIngresado == "f" && primerFAprobado == "aprobado")
		  {
		  	primerFAprobado= "listo";
		  	nombrePrimerAprobada = nombreIngresado;
		  }

		  if (sexoIngresado =="m" && notaIngresado > 6 && primerEnano== "sos enano")
		   {
		   	primerEnano = "listo"
		   	nombreEnano = nombreIngresado;
		   }

		contador =  contador + 1;
	}

	if(contadorMasculino > contadorFemenino && contadorMasculino > contadorNoBinario )
	{
		sexoMas = "Masculino"
	}
	else
	{
		if(contadorFemenino > contadorMasculino && contadorFemenino > contadorNoBinario)
		{
			sexoMas = "Femenino"
		}
		else
		{
			if(contadorNoBinario > contadorFemenino && contadorNoBinario > contadorMasculino)
			{
				sexoMas = "No Binario"	
			}
		}
	}
	promedioAlturaAprobado = alturaAprobados / contadorDeAprobados;
	promedioAltura = sumaDeAltura / contador; // Ejercicio A
	

	mensaje = "el promedio de las alturas totales es de "+promedioAltura+". Hay "+contadorFemenino+" alumnas femeninas, "+contadorMasculino+" alumnos masculinos y "+contadorNoBinario+" alumnes no binarios. La cantidad de aprobados es de "+contadorDeAprobados;
	mensaje = mensaje + ". La cantidad de alumnas que superam los 1,90 mts es de "+contador190F+". El sexo con mas alumnos es el "+sexoMas+". La persona mas alta es "+nombreDelAlto+". y la edad de la primer persona con fiebre es de "+edadFiebre;
	mensaje = mensaje + ". El nombre de la primer mujer aprobada es "+nombrePrimerAprobada+". La altura promedio de los alumnos aprobados es de "+promedioAlturaAprobado+". El primer alumno menor a 1,60 mts en estar desaprobado es "+nombreEnano;

	document.write(mensaje);
}
//FIN DE LA FUNCIÓN
	/*var contador;
	var acumulador;
	var respuesta;
	let numeroIngresado
	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta != "si")
	{
		numeroIngresado = parseInt(prompt("ingresa un numero"))
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta= prompt("desea seguir ingresando numeros")
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;*/