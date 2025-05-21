window.addEventListener('DOMContentLoaded', () => {
  // Obtener exposiciones desde localStorage o array vacío si no hay
  const exposiciones = JSON.parse(localStorage.getItem('exposiciones')) || [];
  if (exposiciones.length === 0) return;

  // Crear contenedor para las exposiciones dinámicas
  const container = document.createElement('div');
  container.id = 'exposiciones-dinamicas';

  exposiciones.forEach((expo, index) => {
    // Crear div principal con clase 'expos' para heredar estilos
    const div = document.createElement('div');
    div.className = 'expos';
    div.style.backgroundImage = `url(${expo.portadaImg})`;
    div.style.backgroundSize = '100%';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundPosition = 'center';

    // Crear etiqueta con número de expo
    const etiqueta = document.createElement('div');
    etiqueta.className = 'etiqueta';
    etiqueta.innerHTML = `<h3>#novaexpo${index + 1}</h3>`;

    // Título de la expo
    const h1 = document.createElement('h1');
    h1.textContent = expo.titulo;

    // Subtítulo con ubicación y fechas
    const h2 = document.createElement('h2');
    h2.textContent = `${expo.ubicacion} - ${expo.fechaInicio} / ${expo.fechaFin}`;

    // Añadir etiqueta y textos al div principal
    div.appendChild(etiqueta);
    div.appendChild(h1);
    div.appendChild(h2);

    // Añadir div de la expo al contenedor principal
    container.appendChild(div);
  });

  // Insertar el contenedor antes de la barra de navegación
  const nav = document.querySelector('.nave');
  document.body.insertBefore(container, nav);
});
