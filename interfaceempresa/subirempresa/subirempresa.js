const form = document.getElementById('expoForm');
const preview = document.getElementById('preview');
const imageInput = document.getElementById('imagen');
const portadaInput = document.getElementById('portadaInput');
const portadaDiv = document.getElementById('portada');
const menuPortada = document.getElementById('menuPortada');
const cambiarPortadaBtn = document.getElementById('cambiarPortada');

// Mostrar el selector de archivos al hacer clic en la portada
portadaDiv.addEventListener('click', function() {
  portadaInput.click();
});

// Cambiar la imagen de la portada
portadaInput.addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function(event) {
    portadaDiv.style.backgroundImage = `url(${event.target.result})`;  // Establecer la nueva portada
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Mostrar menú para cambiar portada
menuPortada.addEventListener('click', function(e) {
  e.stopPropagation();  // Evitar que el clic cierre el menú
  const menuOptions = menuPortada.querySelector('.menu-options');
  menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
});

// Subir la imagen de la obra
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descripcion = document.getElementById('descripcion').value;
  const imagen = imageInput.files[0];

  if (!imagen) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    preview.innerHTML = `
      <img src="${e.target.result}" alt="Obra subida" />
      <h2>${titulo}</h2>
      <p>${descripcion}</p>
    `;
    preview.style.display = 'block';  // Mostrar vista previa de la obra
  };
  reader.readAsDataURL(imagen);

  // Opcional: resetear el formulario después de subir la obra
  form.reset();
});

// Botón para seleccionar otras obras (por ahora solo muestra un mensaje)
document.getElementById('seleccionarObras').addEventListener('click', () => {
  alert("Funcionalidad de selección múltiple aún no implementada 😉");
});
