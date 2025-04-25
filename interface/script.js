document.querySelectorAll('.guardar').forEach(item => {
    // Establece la imagen inicial a 'guardar.png'
    item.style.backgroundImage = "url('../img/guardar.png')";

    item.addEventListener('click', () => {
        // Obtén la imagen actual de fondo
        const currentImage = getComputedStyle(item).backgroundImage;
        console.log("Imagen actual de fondo:", currentImage);  // Para ver si es la correcta
        
        // Cambia la imagen dependiendo de cuál esté actualmente
        if (currentImage.includes('guardar.png')) {
            console.log('Activando la imagen de guardar2');  // Depuración
            item.style.backgroundImage = "url('../img/guardar2.png')"; // Imagen activa
        } else {
            console.log('Desactivando la imagen a guardar');  // Depuración
            item.style.backgroundImage = "url('../img/guardar.png')"; // Imagen desactivada
        }
    });
});
