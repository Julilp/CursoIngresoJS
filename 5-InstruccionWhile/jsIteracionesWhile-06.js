function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador < 5)
	{
		numeroIngresado = parseInt(prompt("ingresa un numero"))
		acumulador= acumulador + numeroIngresado;
		contador = contador + 1;
		console.log(contador);
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN