function mostrar()
{
	let mensaje
	let planetaIngresado

	planetaIngresado= prompt("ingrese un planeta");

	switch (planetaIngresado)
	{
		case "tierra":
			mensaje = "aca vivimos";
		break;
		case "mercurio":
		case "venus":
			mensaje = "acá hace más calor";
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluto":
			mensaje = "acá hace más frio";
		break;
		default:
			mensaje = "usted ingreso un planeta no valido, revise que lo haya escrito en minusculas";
		break;

	}

	alert(mensaje);
}
