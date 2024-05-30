
// Solicita al usuario que introduzca un número entero
let edad = prompt("Introduce tu edad");


let resultado = MayoroMenor(edad);

// Muestra el resultado en una alerta
alert(" " + edad + "  " + resultado);

// Define la función 
function MayoroMenor(edad) {
  if (edad >= 18) {
    return "Bienvenido!";
  } else {
    return "USTED ESTA INGRESANDO BAJO SU RESPONSABILIDAD";
  }
}
