var mensaje = "";
for (var numero = 1;numero <= 100;numero++)
{
  if (esDivisible(numero, 3) == true && esDivisible(numero, 5) == true)
  {
     mensaje = " FizzBozz";
  }
  else if (esDivisible(numero, 3) == true)
  {
           mensaje = " Fizz";
  } else if (esDivisible(numero, 5) == true)
  {
             mensaje = "Bozz";
  } else
  {
             mensaje = numero;
  }
  document.write(mensaje +  "<br>");
}

function esDivisible(num, divisor)
{
  if (num % divisor == 0)
  {
    return true;
  }
  else {
    return false;
  }
}
