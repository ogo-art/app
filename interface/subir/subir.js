function autoResize(el) {
    console.log("autoResize llamada");  // Para verificar que la función se está ejecutando
    el.style.height = "auto";
    el.style.height = (el.scrollHeight) + "px";
}

function togglePreu() {
    console.log("togglePreu llamada");  // Para verificar que la función se está ejecutando
    const checkbox = document.getElementById("checkboxSubhastes");
    const preuSection = document.getElementById("preuSection");
    const subhastesTextarea = document.getElementById("subhastesTextarea");

    if (checkbox.checked) {
        preuSection.style.display = "block";
        subhastesTextarea.style.display = "block";
    } else {
        preuSection.style.display = "none";
        subhastesTextarea.style.display = "none";
    }
}

// Función para manejar la carga de la imagen
document.getElementById('upload-image').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Crea una imagen y establece la fuente
            const img = new Image();
            img.src = e.target.result;

            img.onload = function() {
                // Aquí ajustamos la imagen para que ocupe el cuadrado completo
                const cuadrado = document.querySelector('.cuadrado');
                cuadrado.style.backgroundImage = `url(${img.src})`;
                cuadrado.style.backgroundSize = 'cover';  // Hace que la imagen ocupe todo el cuadrado
                cuadrado.style.backgroundPosition = 'center'; // Alinea la imagen al centro
                cuadrado.style.backgroundRepeat = 'no-repeat'; // No repetir la imagen
            };
        };
        
        reader.readAsDataURL(file);
    }
});

function confirmar() {
    console.log("confirmar llamada");  // Para verificar que la función se está ejecutando
    const nombreSubasta = document.getElementById("nombre-subasta").value;
    const usuario = "Usuario Actual"; // Este debe ser el nombre de usuario que el sistema asigna al registrarse.
    
    // Guardamos el nombre de la subasta en el almacenamiento local
    localStorage.setItem("nombreSubasta", nombreSubasta || "Subasta Sin Nombre");

    // Verificamos si la subasta está activada
    const checkboxSubasta = document.getElementById("checkboxSubhastes");
    if (checkboxSubasta.checked) {
        // Si está activado, redirige a la página de subasta con la imagen
        window.location.href = './../subasta/subasta.html';  // Redirige a la página de subasta
    } else {
        // Si no está activado, solo confirma sin la imagen
        alert("La subasta no está activada.");
    }
}
