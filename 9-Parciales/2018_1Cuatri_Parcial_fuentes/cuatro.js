function mostrar()
{
	let numero1
	let numero2
	let resultado
	let mensaje

	numero1=parseInt(prompt("ingrese el primer numero"));
	numero2=parseInt(prompt("ingrese el segundo numero"));


	if(numero1 == numero2)
	{
		mensaje ="los numeros son " + numero1 + " y " + numero2;
	}
	else
	{
		if(numero1 > numero2)
		{
			resultado=numero1 - numero2;
			mensaje = "la resta es " + resultado;
		}
		else
		{
			if(numero1 < numero2)
			{
				resultado = numero1 + numero2;
				if (resultado > 10)
				 {
				 	mensaje = "el resultado de la suma es " + resultado + " y es mayor a 10";
				 }
				 else
				 {
				 	mensaje = "el resultado es "+ resultado;
				 }
			}
		}
	}

	alert(mensaje);

}
