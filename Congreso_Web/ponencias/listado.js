document.addEventListener('DOMContentLoaded', () => {
  const tabla = document.querySelector("#ponenciasTable tbody");
  const modal = document.getElementById("modalPonencia");
  const modalContenido = document.getElementById("modalContenido");
  const modalTitulo = document.getElementById("modalTitulo");
  const cerrar = document.querySelector(".cerrar");
  const btnCerrarModal = document.getElementById("btnCerrarModal");
  const searchInput = document.getElementById("searchInput");
  const filterStatus = document.getElementById("filterStatus");

  // Renderiza la tabla según los datos actuales y el filtro/búsqueda
  function renderTabla(ponenciasFiltradas) {
    tabla.innerHTML = "";
    ponenciasFiltradas.forEach(p => {
      const estadoClass = p.estado === "Aprobada" ? "status-approved" :
                          p.estado === "Rechazada" ? "status-rejected" : "status-pending";
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
          <button class="btn-sm btn-approve" data-id="${p.ponencia_id}">Aprobar</button>
          <button class="btn-sm btn-reject" data-id="${p.ponencia_id}">Rechazar</button>
          <button class="btn-sm btn-detalles" data-id="${p.ponencia_id}">Ver detalles</button>
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