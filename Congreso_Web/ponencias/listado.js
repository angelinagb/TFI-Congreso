document.addEventListener('DOMContentLoaded', () => {
  const tabla = document.querySelector("#ponenciasTable tbody");
  const modal = document.getElementById("modalPonencia");
  const modalContenido = document.getElementById("modalContenido");
  const modalTitulo = document.getElementById("modalTitulo");
  const cerrar = document.querySelector(".cerrar");
  const btnCerrarModal = document.getElementById("btnCerrarModal");
  const searchInput = document.getElementById("searchInput");
  const filterStatus = document.getElementById("filterStatus");

  // --- Nuevos elementos para el modal de Asignar Evaluador ---
  const assignEvaluatorModal = document.getElementById("assignEvaluatorModal");
  const cerrarAssignEvaluatorModal = document.getElementById("cerrarAssignEvaluatorModal");
  const ponenciaAsignarTitulo = document.getElementById("ponenciaAsignarTitulo");
  const ponenciaAsignarAutor = document.getElementById("ponenciaAsignarAutor");
  const selectEvaluador = document.getElementById("selectEvaluador");
  const btnConfirmarAsignacion = document.getElementById("btnConfirmarAsignacion");
  let currentPonenciaIdToAssign = null; // Para almacenar el ID de la ponencia actual

  // Renderiza la tabla según los datos actuales y el filtro/búsqueda
  function renderTabla(ponenciasFiltradas) {
    tabla.innerHTML = "";
    ponenciasFiltradas.forEach(p => {
      const estadoClass = p.estado === "Aprobada" ? "status-approved" :
                          p.estado === "Rechazada" ? "status-rejected" : "status-pending";
      const tr = document.createElement("tr");

      // Determinar el nombre del evaluador si está asignado
      const nombreEvaluador = p.evaluador_asignado ?
                              (evaluadores.find(e => e.id === p.evaluador_asignado)?.nombre || p.evaluador_asignado)
                              : 'Sin asignar';

      tr.innerHTML = `
        <td>${p.ponencia_id}</td>
        <td>${p.titulo}</td>
        <td>${p.autor_id}</td> 
        <td>${p.fecha}</td>
        <td>
          <span class="status-badge ${estadoClass}">${p.estado}</span>
        </td>
        <td>${nombreEvaluador}</td> <td class="actions">
          <button class="btn-sm btn-approve" data-id="${p.ponencia_id}">Aprobar</button>
          <button class="btn-sm btn-reject" data-id="${p.ponencia_id}">Rechazar</button>
          <button class="btn-sm btn-detalles" data-id="${p.ponencia_id}">Ver detalles</button>
          <button class="btn-sm btn-assign-evaluator" data-id="${p.ponencia_id}">Asignar Evaluador</button>
          ${p.solicitud_derivacion ? `<button class="btn-sm btn-handle-derivation" data-id="${p.ponencia_id}">Derivación Pendiente</button>` : ''}
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
    const id = e.target.dataset.id;
    const ponencia = ponencias.find(p => p.ponencia_id === id);

    if (!ponencia) return; // Si no encuentra la ponencia, salir

    // Botón "Ver detalles"
    if (e.target.classList.contains("btn-detalles")) {
      modalTitulo.textContent = `Ponencia: ${ponencia.titulo}`;
      
      // Obtener el nombre completo del autor si se necesita (admin sí ve el autor)
      // En tu ejemplo 'autor' es el nombre completo y 'autor_id' el anónimo.
      // Aquí el admin puede ver ambos.
      const nombreAutorReal = ponencia.autor; 

      const nombreEvaluadorDetalle = ponencia.evaluador_asignado ? 
                                     (evaluadores.find(e => e.id === ponencia.evaluador_asignado)?.nombre || ponencia.evaluador_asignado)
                                     : 'Sin asignar';

      modalContenido.innerHTML = `
        <p><strong>ID:</strong> ${ponencia.ponencia_id}</p>
        <p><strong>Título:</strong> ${ponencia.titulo}</p>
        <p><strong>Autor:</strong> ${nombreAutorReal} (ID Anónimo: ${ponencia.autor_id})</p>
        <p><strong>Fecha:</strong> ${ponencia.fecha}</p>
        <p><strong>Estado:</strong> ${ponencia.estado}</p>
        <p><strong>Eje temático:</strong> ${ponencia.eje_tematico}</p>
        <p><strong>Resumen:</strong> ${ponencia.resumen}</p>
        <p><strong>Evaluador Asignado:</strong> ${nombreEvaluadorDetalle}</p>
        <p><strong>Solicitud de Derivación:</strong> ${ponencia.solicitud_derivacion ? 'Sí' : 'No'}</p>
        ${ponencia.motivo_derivacion ? `<p><strong>Motivo Derivación:</strong> ${ponencia.motivo_derivacion}</p>` : ''}
        <p><strong>Infografía:</strong> <a href="${ponencia.infografia}" target="_blank">Ver infografía</a></p>
        <p><strong>Informe de investigación:</strong> <a href="${ponencia.informe_investigacion}" target="_blank">Ver informe</a></p>
      `;
      modal.style.display = "flex";
    }

    // Botón "Aprobar"
    if (e.target.classList.contains("btn-approve")) {
      if (confirm(`¿Estás seguro de APROBAR la ponencia "${ponencia.titulo}"?`)) {
        ponencia.estado = "Aprobada";
        alert(`Ponencia "${ponencia.titulo}" APROBADA.`);
        renderTabla(getPonenciasFiltradas());
      }
    }

    // Botón "Rechazar"
    if (e.target.classList.contains("btn-reject")) {
      if (confirm(`¿Estás seguro de RECHAZAR la ponencia "${ponencia.titulo}"?`)) {
        ponencia.estado = "Rechazada";
        alert(`Ponencia "${ponencia.titulo}" RECHAZADA.`);
        renderTabla(getPonenciasFiltradas());
      }
    }

    //Botón "Asignar Evaluador" ---
    if (e.target.classList.contains("btn-assign-evaluator")) {
        const id = e.target.dataset.id;
        const ponencia = ponencias.find(p => p.ponencia_id === id);

        if (ponencia) {
            currentPonenciaIdToAssign = id; // Guarda el ID de la ponencia actual

            ponenciaAsignarTitulo.textContent = ponencia.titulo;
            ponenciaAsignarAutor.textContent = ponencia.autor; // Aquí el admin ve el autor real

            // Limpiar y llenar el select de evaluadores
            selectEvaluador.innerHTML = '<option value="">-- Seleccionar Evaluador --</option>';
            evaluadores.forEach(evaluador => {
                const option = document.createElement('option');
                option.value = evaluador.id;
                option.textContent = evaluador.nombre;
                if (ponencia.evaluador_asignado === evaluador.id) {
                    option.selected = true; // Seleccionar el evaluador actual si ya tiene uno
                }
                selectEvaluador.appendChild(option);
            });

            assignEvaluatorModal.style.display = "flex"; // Mostrar el modal
        }
    }

    // ---Botón "Derivación Pendiente" ---
    if (e.target.classList.contains("btn-handle-derivation")) {
      if (ponencia.solicitud_derivacion) {
        const confirmacion = confirm(`El evaluador ${ponencia.evaluador_asignado || 'actual'} ha solicitado la derivación de la ponencia "${ponencia.titulo}".\nMotivo: ${ponencia.motivo_derivacion || 'No especificado'}\n\n¿Deseas reasignar la ponencia a otro evaluador?`);

        if (confirmacion) {
          let evaluadoresDisponibles = evaluadores.filter(e => e.id !== ponencia.evaluador_asignado);
          let opcionesEvaluadores = evaluadoresDisponibles.map(e => `- ${e.nombre} (ID: ${e.id})`).join('\n');
          
          const nuevoEvaluadorId = prompt(`Reasignar "${ponencia.titulo}" a:\n\nOpciones disponibles:\n${opcionesEvaluadores}\n\nIngresa el ID del nuevo evaluador:`);

          if (nuevoEvaluadorId) {
            const nuevoEvaluadorExiste = evaluadoresDisponibles.some(e => e.id === nuevoEvaluadorId);
            if (nuevoEvaluadorExiste) {
              ponencia.evaluador_asignado = nuevoEvaluadorId;
              ponencia.solicitud_derivacion = false; // Resetear la solicitud después de reasignar
              ponencia.motivo_derivacion = null; // Limpiar el motivo
              alert(`Ponencia "${ponencia.titulo}" reasignada a "${evaluadores.find(e => e.id === nuevoEvaluadorId)?.nombre}".`);
              renderTabla(getPonenciasFiltradas());
            } else {
              alert("ID de nuevo evaluador no válido o es el mismo evaluador actual. Por favor, selecciona un evaluador diferente de la lista.");
            }
          }
        } else {
          // El admin decide no reasignar por ahora, pero la solicitud sigue pendiente
          alert(`Solicitud de derivación de "${ponencia.titulo}" sin cambios. Queda pendiente para revisión.`);
        }
      }
    }
  });


  // Confirmar asignación
btnConfirmarAsignacion.addEventListener('click', () => {
    if (currentPonenciaIdToAssign) {
        const selectedEvaluadorId = selectEvaluador.value;
        if (selectedEvaluadorId) {
            const ponencia = ponencias.find(p => p.ponencia_id === currentPonenciaIdToAssign);
            if (ponencia) {
                ponencia.evaluador_asignado = selectedEvaluadorId;
                const nombreEvaluador = evaluadores.find(e => e.id === selectedEvaluadorId)?.nombre || selectedEvaluadorId;
                alert(`Evaluador "${nombreEvaluador}" asignado a "${ponencia.titulo}".`);
                assignEvaluatorModal.style.display = "none"; // Cerrar el modal
                renderTabla(getPonenciasFiltradas()); // Volver a renderizar la tabla
            }
        } else {
            alert("Por favor, selecciona un evaluador.");
        }
    }
});

// Cerrar modal de asignar evaluador
cerrarAssignEvaluatorModal.addEventListener('click', () => {
    assignEvaluatorModal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de él (opcional, si no lo tienes para este modal)
window.addEventListener("click", (e) => {
    if (e.target === assignEvaluatorModal) {
        assignEvaluatorModal.style.display = "none";
    }
});

  // --- Eventos para cerrar el modal ---
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  btnCerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Eventos de búsqueda y filtro
  searchInput.addEventListener("input", () => {
    renderTabla(getPonenciasFiltradas());
  });
  filterStatus.addEventListener("change", () => {
    renderTabla(getPonenciasFiltradas());
  });

  // Renderizar la tabla inicial al cargar la página
  renderTabla(getPonenciasFiltradas());
});