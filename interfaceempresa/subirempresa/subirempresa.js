const form = document.getElementById('expoForm');
const preview = document.getElementById('preview');
const imageInput = document.getElementById('imagen'); // opcional
const portadaInput = document.getElementById('portadaInput');
const portadaDiv = document.getElementById('portada');
const menuPortada = document.getElementById('menuPortada');
const cambiarPortadaBtn = document.getElementById('cambiarPortada');
const menuOpciones = document.getElementById('menuOpciones');

// Cambiar imagen de portada
cambiarPortadaBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  menuOpciones.style.display = 'none';
  portadaInput.click();
});

portadaInput.addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = portadaDiv.querySelector('img');
    if (img) {
      img.src = event.target.result;
    }
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Menú de portada
menuPortada.addEventListener('click', function (e) {
  e.stopPropagation();
  menuOpciones.style.display = menuOpciones.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function () {
  menuOpciones.style.display = 'none';
});

// Vista previa (opcional)
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = imageInput?.files?.[0];

    if (!imagen) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      preview.innerHTML = `
        <img src="${e.target.result}" alt="Obra subida" />
        <h2>${titulo}</h2>
        <p>${descripcion}</p>
      `;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(imagen);

    form.reset();
  });
}

// Mostrar obras seleccionadas desde localStorage
window.addEventListener('DOMContentLoaded', () => {
  const obrasData = localStorage.getItem('obrasSeleccionadas');
  if (!obrasData) return;

  const obrasURLs = JSON.parse(obrasData);
  if (!Array.isArray(obrasURLs) || obrasURLs.length === 0) return;

  const contenedorObras = document.createElement('div');
  contenedorObras.id = 'obrasSeleccionadasContainer';
  contenedorObras.style.margin = '20px 0';  // margen arriba y abajo para separar de botones

  const titulo = document.createElement('h3');
  titulo.textContent = 'Obras seleccionadas para la expo';
  contenedorObras.appendChild(titulo);

  const galeria = document.createElement('div');
  galeria.style.display = 'flex';
  galeria.style.gap = '10px';
  galeria.style.flexWrap = 'wrap';

  obrasURLs.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.objectFit = 'cover';
    img.style.border = '1px solid #ccc';
    img.style.borderRadius = '4px';
    galeria.appendChild(img);
  });

  contenedorObras.appendChild(galeria);

  // Inserta contenedorObras justo antes del div.extra-options para que quede encima de los botones
  const mainForm = document.querySelector('main.formulario') || document.body;
  const extraOptions = mainForm.querySelector('.extra-options');
  if (extraOptions) {
    mainForm.insertBefore(contenedorObras, extraOptions);
  } else {
    mainForm.appendChild(contenedorObras);
  }

  // Limpiar después de mostrar
  localStorage.removeItem('obrasSeleccionadas');
});

// Botón "Seleccionar obras"
const botonObras = document.querySelector('.boton-obras');
if (botonObras) {
  botonObras.addEventListener('click', () => {
    alert("Funcionalidad de selección múltiple aún no implementada 😉");
  });
}

// Confirmar Expo
document.getElementById('confirmarExpo').addEventListener('click', function () {
  const titulo = document.getElementById('titulo').value;
  const descripcion = document.getElementById('descripcion').value;
  const fechaInicio = document.getElementById('fechaInicio').value;
  const fechaFin = document.getElementById('fechaFin').value;
  const ubicacion = document.getElementById('ubicacion').value;

  const portadaImg = portadaDiv.querySelector('img')?.src || '';

  if (!titulo || !descripcion || !fechaInicio || !fechaFin || !ubicacion || !portadaImg) {
    alert('Completa todos los campos y selecciona una portada.');
    return;
  }

  const exposiciones = JSON.parse(localStorage.getItem('exposiciones')) || [];

  exposiciones.push({
    titulo,
    descripcion,
    fechaInicio,
    fechaFin,
    ubicacion,
    portadaImg
  });

  localStorage.setItem('exposiciones', JSON.stringify(exposiciones));

  // Redirigir
  function myFunction() {
    location.replace("../exposiciones/expoempresa.html")
  }
});
