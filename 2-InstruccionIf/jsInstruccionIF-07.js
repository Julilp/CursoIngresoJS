/*Al ingresar una edad menor a 18 años y un estado civil 
distinto a "Soltero", mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/
	/*Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
	si es menor de 13 , mostrar el mensaje “feliz día”.
	Si es adolescente el mensaje es “usted es adolescente”)
	si tiene 17 años además mostrar el mensaje “último año!!!”
	Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
	si tiene 33 años , además mostrar el mensaje “como cristo”
	si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
	si tiene 88, además mostrar el mensaje “lindo número''
	si la edad es par , además mostrar , “sos par!!”.
	julian lopez div c 
	*/
function mostrar()
{


	let edadIngresada
	let mensaje
	let restoEdad
	let nombreIngresado
	let estadoCivil

	nombreIngresado = prompt("Ingrese su nombre"); 
	edadIngresada=parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil=document.getElementById('estadoCivil').value;

	if (edadIngresada < 13)
	{
		mensaje = "Feliz dia";
		if(nombreIngresado == "Ricardo")
		{
			mensaje = mensaje + ". Sos muy chico para ese nombre";
		}
	}
	else
	{
		if(edadIngresada < 18)
		{
			mensaje ="Usted es adolecente";

			if(edadIngresada == 17)
			{
				mensaje = mensaje + ", y ademas es su ultimo año!!"
			}
			if (nombreIngresado == "Violeta")
			{
				mensaje = mensaje + ". Como un color ";
			}
			if(estadoCivil == "Divorciado")
			{
				mensaje= mensaje + " toda una vida por delante"
			}
		}
		else
		{			
			mensaje = "Ya podes laburar";

			if(edadIngresada == 33)
			{
				mensaje = mensaje + ", como cristo";
			}
			if(estadoCivil == "Soltero" && edadIngresada < 60)
			{
 				mensaje= mensaje + " a salir";
			}				
			else
			{
				if(edadIngresada > 60)
				{
					mensaje = mensaje + ", a jubilarse"

					if(edadIngresada == 88)
					{
						mensaje = mensaje + ", lindo numero";
					}
					if(nombreIngresado == "Alfredo")
					{
						mensaje = mensaje + ". como el de QUEENE";
					}
				}
			}							
		}
			if(estadoCivil == "Casado")
			{
				mensaje = mensaje + " casado quiere casa";
			}
	}

	restoEdad = edadIngresada % 2;
	if (restoEdad == 0)
	 {
	 	mensaje = mensaje + " , y sos par";
	 }


	alert (mensaje);
}












/*
	 if(nombreIngresado == "Violeta")
	 {
	 	if (edadIngresada < 18 && edadIngresada > 12)
	 	 {
	 	 	mensaje = mensaje + ". Como un color"
	 	 }
	 }
	 else
	 {
	 	if(edadIngresada < 13 && nombreIngresado == "Ricardo")
	 	{
	 		mensaje = mensaje + ". Sos muy chico para ese nombre"
	 	}
	 	else
	 	{
	 	 	if(edadIngresada > 60 && nombreIngresado == "Alfredo")
	 		{
	 			mensaje = mensaje + ". como el de QUEENE"
	 		}
	 	}

	 }
*/


	/*let edadIngresada
	let estadoCivil
		edadIngresada=parseInt(document.getElementById('txtIdEdad').value);
		estadoCivil=document.getElementById('estadoCivil').value;

	if (edadIngresada < 18 && estadoCivil != "Soltero" )
	 {
	 	alert ("Usted es demasiado chico para NO ser soltero");
	 }*/

//FIN DE LA FUNCIÓN