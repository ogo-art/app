window.addEventListener('DOMContentLoaded', () => {
  const expo = JSON.parse(localStorage.getItem('expoDetalle'));

  if (!expo) {
    // Si no hay detalle, mostrar mensaje o redirigir
    document.body.innerHTML = '<h1>No se encontró la exposición</h1>';
    return;
  }

  // Cambiar título principal en la clase .foto
  const fotoDiv = document.querySelector('.foto h1');
  if (fotoDiv) fotoDiv.textContent = expo.titulo || 'Sin título';

  // Cambiar empresa (h1 y h2) dentro de .empresa .textos
  const empresaTitulo = document.querySelector('.empresa .textos h1');
  const empresaSubtitulo = document.querySelector('.empresa .textos h2');
  if (empresaTitulo) empresaTitulo.textContent = expo.empresaNombre || 'Nombre empresa';
  if (empresaSubtitulo) empresaSubtitulo.textContent = expo.empresaDescripcion || 'Descripción empresa';

  // Rellenar la sección de requisitos con datos de la expo
  const container = document.querySelector('.container');
  if (container) {
    container.innerHTML = `
      <h1>REQUISITS</h1>
      <h2>Temàtica</h2>
      <p>${expo.tematica || 'No disponible'}</p>
      <h2>Objectiu</h2>
      <p>${expo.objectiu || 'No disponible'}</p>
      <h2>Tipus d'art</h2>
      <p>${expo.tipusArt || 'No disponible'}</p>
      <h2>Data i ubicació</h2>
      <p>${expo.fechaInicio} al ${expo.fechaFin}, ${expo.ubicacion}</p>
      <h2>Convocatòria</h2>
      <p>${expo.convocatoria || 'No disponible'}</p>
      <h2>Hashtag</h2>
      <p>${expo.hashtag || ''}</p>
    `;
  }

  // Aquí podrías añadir lógica para mostrar las obras participantes si las tienes guardadas
});
