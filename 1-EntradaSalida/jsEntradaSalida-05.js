/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*
ejercicio 05 bis
Debemos lograr tomar nombre, apellido (este por prompt) y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José,perez  y tiene 66 años" 	*/

function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;
	let apellidoIngresado;
	let mensaje

	apellidoIngresado=prompt("Ingrese su apellido");
	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	
	mensaje="Usted se llama "+nombreIngresado;
	mensaje=mensaje+", "+apellidoIngresado;
	mensaje=mensaje+" y tiene "+edadIngresada+" años";
	alert(mensaje);

	
}
/*
	 v1
	//alert("Usted se llama José y tiene 66 años");
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");
	

	 v2
	//alert("Usted se llama José y tiene 66 años");

	mensaje="Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años";
	
	alert(mensaje);

	 v3
	//alert("Usted se llama José y tiene 66 años");

	mensaje="Usted se llama "+nombreIngresado;
	mensaje=mensaje+ " y tiene "+edadIngresada;
	mensaje=mensaje+ " años";
	
	alert(mensaje);
	
*/