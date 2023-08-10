// eventos.js
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia al div por su ID
    let divElement = document.getElementById("contenedor");
  
    // Asignar el manejador de eventos para el click en el div
    divElement.addEventListener("click", function (event) {
      if (!event.target.matches('button')) {
          alert("Hola! Soy el div");
      }
    });
  });
  