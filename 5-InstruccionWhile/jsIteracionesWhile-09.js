/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado =parseInt(prompt("ingresa un numero"))

		if(banderaDelPrimero == true)
		{
			banderaDelPrimero = false;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else
		{
			if (numeroIngresado > numeroMaximo)
			 {
			 	numeroMaximo = numeroIngresado;
			 }
			 else
			 {
			 	if(numeroIngresado < numeroMinimo)
			 	{
			 		numeroMinimo = numeroIngresado;
			 	}
			 }			 		
		}

		respuesta=prompt("desea continuar?");

	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}
//FIN DE LA FUNCIÓN