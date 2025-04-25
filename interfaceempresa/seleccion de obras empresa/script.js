document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('seleccionar');
  const cuadrados = document.querySelectorAll('.cuadrados');

  // Recupera el estado del checkbox del almacenamiento local
  const estadoCheckbox = localStorage.getItem('checkboxChecked');

  // Si hay un estado guardado, asigna ese estado al checkbox
  if (estadoCheckbox === 'true') {
      checkbox.checked = true;
  } else {
      checkbox.checked = false;
  }

  // Función para mostrar/ocultar círculos según el estado del checkbox
  checkbox.addEventListener('change', function() {
      // Guarda el estado del checkbox en localStorage
      localStorage.setItem('checkboxChecked', checkbox.checked);

      cuadrados.forEach(cuadrado => {
          const circle = cuadrado.querySelector('.circle');
          
          if (checkbox.checked) {
              // Mostrar el círculo cuando el checkbox esté marcado
              circle.style.display = 'block';

              // Permitir que el usuario cambie el color del círculo a rojo al hacer clic
              circle.addEventListener('click', function() {
                  // Cambiar el color a rojo o transparente si ya es rojo
                  circle.style.backgroundColor = circle.style.backgroundColor === 'red' ? 'transparent' : 'red';
              });
          } else {
              // Ocultar el círculo si el checkbox no está marcado
              circle.style.display = 'none';
          }
      });
  });

  // Mostrar/Ocultar filtros al hacer clic en el botón de filtrar
  document.getElementById('filtrarBtn').addEventListener('click', function() {
      var filtros = document.getElementById('filtros');
      filtros.style.display = filtros.style.display === 'none' ? 'block' : 'none';
  });

  // Mostrar/Ocultar dropdown de Autor
  document.getElementById('autorBtn').addEventListener('click', function() {
      var dropdown = document.getElementById('autorDropdown');
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });

  // Mostrar/Ocultar dropdown de Especialitat
  document.getElementById('especialitatBtn').addEventListener('click', function() {
      var dropdown = document.getElementById('especialitatDropdown');
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });

  // Mostrar/Ocultar calendario de Data
  document.getElementById('dataBtn').addEventListener('click', function() {
      var dropdown = document.getElementById('dataDropdown');
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });

  // Cierra cualquier dropdown cuando se hace clic fuera de él
  document.addEventListener('click', function(event) {
    const autorDropdown = document.getElementById('autorDropdown');
    const especialitatDropdown = document.getElementById('especialitatDropdown');
    const dataDropdown = document.getElementById('dataDropdown');

    // Verifica que el clic no haya sido dentro de uno de los dropdowns o los botones de filtro
    if (!autorDropdown.contains(event.target) && !document.getElementById('autorBtn').contains(event.target)) {
      autorDropdown.style.display = 'none';
    }

    if (!especialitatDropdown.contains(event.target) && !document.getElementById('especialitatBtn').contains(event.target)) {
      especialitatDropdown.style.display = 'none';
    }

    if (!dataDropdown.contains(event.target) && !document.getElementById('dataBtn').contains(event.target)) {
      dataDropdown.style.display = 'none';
    }
  });
});
