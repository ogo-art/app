// Funcionalidad para cambiar la imagen de fondo de los elementos con la clase 'guardar'
document.querySelectorAll('.guardar').forEach(item => {
    item.style.backgroundImage = "url('../img/guardar.png')";

    item.addEventListener('click', () => {
        const currentImage = getComputedStyle(item).backgroundImage;
        console.log("Imagen actual de fondo:", currentImage);

        if (currentImage.includes('guardar.png')) {
            console.log('Activando la imagen de guardar2');
            item.style.backgroundImage = "url('../../img/guardar2.png')";
        } else {
            console.log('Desactivando la imagen a guardar');
            item.style.backgroundImage = "url('../../img/guardar.png')";
        }
    });
});

// Funcionalidad para mostrar el botón de "Seguir" al hacer clic en una expo
document.querySelectorAll('.expo').forEach(expo => {
    expo.addEventListener('click', () => {
        const seguirButton = expo.querySelector('.seguir');
        seguirButton.style.display = 'block';
    });
});

// Funcionalidad para girar la imagen de fondo y mostrar el texto "Siguiendo"
const desplegarImg = document.querySelector('.canvi');
const siguiendoTexto = document.getElementById('siguiendoTexto'); // Asegúrate de que esto existe en tu HTML

desplegarImg.addEventListener('click', function() {
    console.log('Clic en la imagen de desplegar');
    desplegarImg.classList.toggle('girar');

    // Mostrar/ocultar el texto "Siguiendo"
    siguiendoTexto.classList.toggle('oculto');
});
