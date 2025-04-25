document.addEventListener('DOMContentLoaded', function () {
    // Recuperamos el valor de "nombreSubasta" del localStorage
    const nombreSubasta = localStorage.getItem("nombreSubasta");
  
    // Verificar si el nombre de la subasta está presente
    if (nombreSubasta) {
      // Cambiar el contenido del h2 con el id "titulo-subasta"
      const tituloSubasta = document.getElementById("titulo-subasta");
      if (tituloSubasta) {
        tituloSubasta.textContent = nombreSubasta;  // Actualizamos el nombre de la subasta
      }
    } else {
      console.log("No se encontró el nombre de la subasta en el localStorage.");
    }
  
    // Mostrar las horas de creación y puja
    const horaCreacion = new Date();
    const horaPuja = new Date();
  
    const horaCreacionFormatted = horaCreacion.toLocaleTimeString();
    const horaPujaFormatted = horaPuja.toLocaleTimeString();
  
    const horas = document.querySelectorAll('.hora');
    horas.forEach((horaElement) => {
      horaElement.innerHTML = `
        <p>Creada: ${horaCreacionFormatted}</p>
        <p>Pujada: ${horaPujaFormatted}</p>
      `;
    });
  });
  