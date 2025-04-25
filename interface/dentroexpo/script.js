// Función para obtener el parámetro 'id' de la URL
function obtenerParametro(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Cargar la exposición según el id
  function cargarExposicion(id) {
    // Datos simulados (en una implementación real, estos datos vendrían de una base de datos)
    const exposiciones = [
      {
        id: 1,
        nombre: 'Exposició Transilvanian',
        descripcion: 'Descripción de la Exposición Transilvanian.',
        tematica: 'Fotografia',
        hashtag: '#transilvanian',
        obras: ['Obra 1', 'Obra 2', 'Obra 3', 'Obra 4', 'Obra 5', 'Obra 6']
      },
      {
        id: 2,
        nombre: 'Exposició Barcelona',
        descripcion: 'Descripción de la Exposición en Barcelona.',
        tematica: 'Escultura',
        hashtag: '#barcelona',
        obras: ['Obra 7', 'Obra 8', 'Obra 9', 'Obra 10', 'Obra 11', 'Obra 12']
      },
      {
        id: 3,
        nombre: 'Exposició Madrid',
        descripcion: 'Descripción de la Exposición en Madrid.',
        tematica: 'Pintura',
        hashtag: '#madrid',
        obras: ['Obra 13', 'Obra 14', 'Obra 15', 'Obra 16', 'Obra 17', 'Obra 18']
      }
      // Agrega más exposiciones si las necesitas
    ];
  
    // Buscar la exposición correspondiente por ID
    const exposicion = exposiciones.find(exp => exp.id === parseInt(id));
  
    if (exposicion) {
      // Mostrar la información de la exposición
      document.getElementById('expo-nombre').textContent = exposicion.nombre;
      document.getElementById('expo-descripcion').textContent = exposicion.descripcion;
      document.getElementById('expo-tematica').textContent = exposicion.tematica;
      document.getElementById('expo-hashtag').textContent = exposicion.hashtag;
  
      // Mostrar las obras de la exposición
      const obrasContainer = document.getElementById('obras-container');
      exposicion.obras.forEach(obra => {
        const divObra = document.createElement('div');
        divObra.classList.add('cuadro-obra');
        divObra.textContent = obra; // Aquí puedes agregar más detalles, como imágenes de las obras
        obrasContainer.appendChild(divObra);
      });
    } else {
      // Si no se encuentra la exposición, mostrar un mensaje de error
      document.getElementById('expo-nombre').textContent = 'Exposición no encontrada';
    }
  }
  
  // Obtener el ID de la URL y cargar la exposición
  const exposicionId = obtenerParametro('id');
  cargarExposicion(exposicionId);
  