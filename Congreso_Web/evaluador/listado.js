
const evaluadores = {
  "Innovación y Tecnología": ["Juan Ledesma", "Sofía Martínez"],
  "Educación y Aprendizaje": ["Laura Ramírez", "Matías Pérez"],
  "Salud y Bienestar": ["Pedro Gómez", "Valeria Cruz"]
};

document.addEventListener('DOMContentLoaded', () => {
  const tabla = document.querySelector("#ponenciasTable tbody");
  const modal = document.getElementById("modalPonencia");
  const modalContenido = document.getElementById("modalContenido");
  const modalTitulo = document.getElementById("modalTitulo");
  const cerrar = document.querySelector(".cerrar");
  const btnCerrarModal = document.getElementById("btnCerrarModal");
  const searchInput = document.getElementById("searchInput");
  const filterStatus = document.getElementById("filterStatus");
  const modalDerivar = document.getElementById("modalDerivar");
  const cerrarDerivar = document.getElementById("cerrarDerivar");
  const razonDerivar = document.getElementById("razonDerivar");
  const evaluadorDestino = document.getElementById("evaluadorDestino");
  const btnConfirmar = document.getElementById("btnConfirmarDerivacion");


let ponenciaSeleccionada = null;

    // Renderiza la tabla según los datos actuales y el filtro/búsqueda
function renderTabla(ponenciasFiltradas) {
  tabla.innerHTML = "";
  ponenciasFiltradas.forEach(p => {
    let estadoClass = "status-pending";
    if (p.estado === "Aprobada") estadoClass = "status-approved";
    else if (p.estado === "Rechazada") estadoClass = "status-rejected";
    else if (p.estado === "Derivada") estadoClass = "status-derivada";

    // Si está derivada, deshabilita los botones
    const disabled = p.estado === "Derivada" ? "disabled" : "";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.ponencia_id}</td>
      <td>${p.titulo}</td>
      <td>${p.autor_id}</td> 
      <td>${p.fecha}</td>
      <td>
        <span class="status-badge ${estadoClass}">${p.estado}</span>
      </td>
      <td class="actions">
        <button class="btn-sm btn-approve" data-id="${p.ponencia_id}" ${disabled}>Aprobar</button>
        <button class="btn-sm btn-reject" data-id="${p.ponencia_id}" ${disabled}>Rechazar</button>
        <button class="btn-sm btn-detalles" data-id="${p.ponencia_id}">Ver detalles</button>
        <button class="btn-sm btn-derivar" data-id="${p.ponencia_id}" ${disabled}>Derivar</button>
      </td>
    `;
    tabla.appendChild(tr);
  });
}

  // Filtro y búsqueda
  function getPonenciasFiltradas() {
    const texto = searchInput.value.toLowerCase();
    const estado = filterStatus.value;
    return ponencias.filter(p => {
      const coincideTexto = p.titulo.toLowerCase().includes(texto) ||
                            p.autor.toLowerCase().includes(texto) ||
                            p.ponencia_id.toLowerCase().includes(texto);
      const coincideEstado = estado === "all" ||
        (estado === "pending" && p.estado === "Pendiente") ||
        (estado === "approved" && p.estado === "Aprobada") ||
        (estado === "rejected" && p.estado === "Rechazada");
      return coincideTexto && coincideEstado;
    });
  }

  // Inicializa la tabla
  renderTabla(ponencias);

  // Delegación de eventos SOLO en el tbody de la tabla
  tabla.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-detalles")) {
      const id = e.target.dataset.id;
      const ponencia = ponencias.find(p => p.ponencia_id === id);
      if (ponencia) {
        modalTitulo.textContent = `Ponencia: ${ponencia.titulo}`;
        modalContenido.innerHTML = `
          <p><strong>ID:</strong> ${ponencia.ponencia_id}</p>
          <p><strong>Autor:</strong> (${ponencia.autor_id})</p>
          <p><strong>Fecha:</strong> ${ponencia.fecha}</p>
          <p><strong>Estado:</strong> ${ponencia.estado}</p>
          <p><strong>Eje temático:</strong> ${ponencia.eje_tematico}</p>
          <p><strong>Resumen:</strong> ${ponencia.resumen}</p>
          <p><strong>Infografía:</strong> <a href="${ponencia.infografia}" target="_blank">Ver infografía</a></p>
          <p><strong>Informe de investigación:</strong> <a href="${ponencia.informe_investigacion}" target="_blank">Ver informe</a></p>
        `;
        modal.style.display = "flex";
      }
    }
    if (e.target.classList.contains("btn-approve")) {
      const id = e.target.dataset.id;
      const ponencia = ponencias.find(p => p.ponencia_id === id);
      if (ponencia) {
        ponencia.estado = "Aprobada";
        renderTabla(getPonenciasFiltradas());
      }
    }
    if (e.target.classList.contains("btn-reject")) {
      const id = e.target.dataset.id;
      const ponencia = ponencias.find(p => p.ponencia_id === id);
      if (ponencia) {
        ponencia.estado = "Rechazada";
        renderTabla(getPonenciasFiltradas());
      }
    }

    if (e.target.classList.contains("btn-derivar")) {
      const id = e.target.dataset.id;
      ponenciaSeleccionada = ponencias.find(p => p.ponencia_id === id);
      if (ponenciaSeleccionada) {
        razonDerivar.value = "";
        evaluadorDestino.innerHTML = '<option value="">Seleccionar evaluador</option>';
        modalDerivar.style.display = "flex";
  }
}

  });


  cerrarDerivar.addEventListener("click", () => {
  modalDerivar.style.display = "none";
});

razonDerivar.addEventListener("change", () => {
  const motivo = razonDerivar.value;
  evaluadorDestino.innerHTML = '<option value="">Seleccionar evaluador</option>';
  if (!ponenciaSeleccionada) return;

  let posiblesEvaluadores = [];
  if (motivo === "conflicto") {
    posiblesEvaluadores = evaluadores[ponenciaSeleccionada.eje_tematico] || [];
  } else if (motivo === "eje") {
    posiblesEvaluadores = Object.keys(evaluadores)
      .filter(eje => eje !== ponenciaSeleccionada.eje_tematico)
      .flatMap(eje => evaluadores[eje]);
  }
  if (motivo === "conflicto") {
    const eje = ponenciaSeleccionada.eje_tematico;
    const grupo = document.createElement("optgroup");
    grupo.label = eje;
    (evaluadores[eje] || []).forEach(nombre => {
      const option = document.createElement("option");
      option.value = nombre;
      option.textContent = nombre;
      grupo.appendChild(option);
    });
    evaluadorDestino.appendChild(grupo);
  } else if (motivo === "eje") {
    Object.entries(evaluadores).forEach(([eje, lista]) => {
      if (eje === ponenciaSeleccionada.eje_tematico) return; // excluye el eje actual
      const grupo = document.createElement("optgroup");
      grupo.label = eje;
      lista.forEach(nombre => {
        const option = document.createElement("option");
        option.value = nombre;
        option.textContent = nombre;
        grupo.appendChild(option);
      });
      evaluadorDestino.appendChild(grupo);
    });
  }
});

confirmarDerivacion.addEventListener("click", () => {
  const evaluador = evaluadorDestino.value;
  if (!evaluador) {
    alert("Seleccioná un evaluador.");
    return;
  }
  ponenciaSeleccionada.estado = "Derivada";
  renderTabla(getPonenciasFiltradas());
  modalDerivar.style.display = "none";
});



  // Eventos de búsqueda y filtro
  searchInput.addEventListener("input", () => {
    renderTabla(getPonenciasFiltradas());
  });
  filterStatus.addEventListener("change", () => {
    renderTabla(getPonenciasFiltradas());
  });

  cerrar.addEventListener("click", () => modal.style.display = "none");
  btnCerrarModal.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

confirmarDerivacion.addEventListener("click", () => {
  const evaluador = evaluadorDestino.value;
  if (!evaluador) {
    alert("Seleccioná un evaluador.");
    return;
  }
  ponenciaSeleccionada.estado = "Derivada";
  renderTabla(getPonenciasFiltradas());
  modalDerivar.style.display = "none";
});