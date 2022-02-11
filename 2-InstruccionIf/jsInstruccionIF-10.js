/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
julian lopez if 10
*/
function mostrar()
{
	  let num

    num = Math.round(Math.random() * (10 - 1)) + 1;
    parseInt(num)

    if (num >0 && num < 4) 
    {
        alert(" Vamos la próxima se puede "+num);
    }
    else
    {
        if(num > 3 && num < 8)
        {
            alert(" Aprobó "+num);
        }
        else 
        {
            alert(" Excelente "+num);
        }
    }

}
	