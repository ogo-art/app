// Funcionalidad para cambiar la imagen de fondo de los elementos con la clase 'guardar'
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

// Funcionalidad para mostrar el botón de "Seguir" al hacer clic en una expo
document.querySelectorAll('.expo').forEach(expo => {
    expo.addEventListener('click', () => {
        // Busca el contenedor del botón de "Seguir" dentro de la expo
        const seguirButton = expo.querySelector('.seguir');
        // Muestra el botón de "Seguir"
        seguirButton.style.display = 'block';
    });
});

// Funcionalidad para hacer rotar la imagen de fondo al hacer clic
const desplegarImg = document.querySelector('.canvi');

// Agregamos un evento de clic al contenedor de la imagen (desplegar)
desplegarImg.addEventListener('click', function() {
    console.log('Clic en la imagen de desplegar');  // Verifica si se detecta el clic
    
    // Agregamos o quitamos la clase 'girar' para rotar la imagen
    desplegarImg.classList.toggle('girar');  // Aplica la rotación de la imagen
});
