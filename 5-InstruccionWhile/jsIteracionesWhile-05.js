/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ERROR, ingrese f ó m .");
	}

	if (sexoIngresado == "f")
	 {
	 	sexoIngresado = "Femenino"
	 }
	 else
	 {
	 	sexoIngresado = "Masculino"	 	
	 }

	txtIdSexo.value=sexoIngresado;
	
}//FIN DE LA FUNCIÓN