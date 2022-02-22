/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese la clave.");

	while(claveIngresada != "utn 750")
	{
		claveIngresada = prompt("error, la clave es incorrecta");
	}

	alert("bievenido")

}//FIN DE LA FUNCIÓN
