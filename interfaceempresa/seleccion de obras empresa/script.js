document.addEventListener("DOMContentLoaded", () => {
  const modoSeleccion = document.getElementById("modoSeleccion");
  const obrasGrid = document.getElementById("obrasGrid");
  const abrirFiltrosBtn = document.getElementById("abrirFiltros");
  const filtrosPanel = document.getElementById("filtrosPanel");

  const autorInput = document.getElementById("autor");
  const especialidadSelect = document.getElementById("especialidad");
  const fechaInput = document.getElementById("fecha");

  const vistaPreviaBtn = document.getElementById("vistaPrevia");
  const confirmarBtn = document.getElementById("confirmar");

  const modalVistaPrevia = document.getElementById("modalVistaPrevia");
  const cerrarModalBtn = document.getElementById("cerrarModal");
  const expoPreview = document.getElementById("expoPreview");

  // Mostrar/Ocultar panel filtros
  abrirFiltrosBtn.addEventListener("click", () => {
    filtrosPanel.classList.toggle("active");
  });

  // Filtrar obras
  function filtrarObras() {
    const autor = autorInput.value.trim().toLowerCase();
    const especialidad = especialidadSelect.value;
    const fecha = fechaInput.value;

    const obras = obrasGrid.querySelectorAll(".obra");

    obras.forEach((obra) => {
      const obraAutor = obra.dataset.autor.toLowerCase();
      const obraEspecialidad = obra.dataset.especialidad.toLowerCase();
      const obraFecha = obra.dataset.fecha;

      let mostrar = true;

      if (autor && !obraAutor.includes(autor)) {
        mostrar = false;
      }
      if (especialidad && especialidad !== "" && obraEspecialidad !== especialidad) {
        mostrar = false;
      }
      if (fecha && obraFecha !== fecha) {
        mostrar = false;
      }

      obra.style.display = mostrar ? "block" : "none";
    });
  }

  autorInput.addEventListener("input", filtrarObras);
  especialidadSelect.addEventListener("change", filtrarObras);
  fechaInput.addEventListener("change", filtrarObras);

  // Modo selección
  modoSeleccion.addEventListener("change", () => {
    if (!modoSeleccion.checked) {
      // Deseleccionar todas
      const seleccionadas = obrasGrid.querySelectorAll(".obra.seleccionada");
      seleccionadas.forEach((obra) => obra.classList.remove("seleccionada"));
    }
  });

  // Seleccionar obra al hacer clic si está activado el modo selección
  obrasGrid.addEventListener("click", (e) => {
    if (!modoSeleccion.checked) return;

    // Encontrar elemento obra más cercano
    const obra = e.target.closest(".obra");
    if (!obra || obra.style.display === "none") return;

    obra.classList.toggle("seleccionada");
  });

  // Vista previa: mostrar modal con las obras seleccionadas
  vistaPreviaBtn.addEventListener("click", () => {
    const seleccionadas = obrasGrid.querySelectorAll(".obra.seleccionada");
    if (seleccionadas.length === 0) {
      alert("No ha seleccionado ninguna obra.");
      return;
    }

    // Vaciar vista previa
    expoPreview.innerHTML = "";

    // Clonar y mostrar obras seleccionadas en el modal
    seleccionadas.forEach((obra) => {
      const clon = obra.cloneNode(true);
      clon.classList.remove("seleccionada");
      // Ocultar el selector círculo en vista previa
      const selector = clon.querySelector(".selector-circulo");
      if (selector) selector.style.display = "none";

      expoPreview.appendChild(clon);
    });

    modalVistaPrevia.style.display = "block";
  });

  // Cerrar modal
  cerrarModalBtn.addEventListener("click", () => {
    modalVistaPrevia.style.display = "none";
  });

  // Cerrar modal al hacer click fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modalVistaPrevia) {
      modalVistaPrevia.style.display = "none";
    }
  });

  // Confirmar: guardar selección en localStorage y redirigir
  confirmarBtn.addEventListener("click", () => {
    const seleccionadas = obrasGrid.querySelectorAll(".obra.seleccionada");
    if (seleccionadas.length === 0) {
      alert("Debe seleccionar al menos una obra para confirmar.");
      return;
    }

    // Guardar ids o algún identificador en localStorage
    // Aquí como ejemplo guardamos los títulos (h4)
    const seleccionIds = Array.from(seleccionadas).map(obra => obra.querySelector("h4").textContent);
    localStorage.setItem("obrasSeleccionadas", JSON.stringify(seleccionIds));

    // Cambia la ruta aquí a la página dentro de subirempresa
    window.location.href = "../../app/interfaceempresa/subirempresa/subirempresa.html";
  });
});
