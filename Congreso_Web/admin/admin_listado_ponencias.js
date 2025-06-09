document.addEventListener('DOMContentLoaded', () => {
  const tabla = document.getElementById('tablaAprobadas').querySelector('tbody');
  // Filtra solo las ponencias aprobadas
  const aprobadas = ponencias.filter(p => p.estado === "Aprobada");
  tabla.innerHTML = '';
  aprobadas.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.ponencia_id}</td>
      <td>${p.titulo}</td>
      <td>${p.autor}</td>
      <td>${p.fecha}</td>
      <td>${p.eje_tematico}</td>
      <td>${p.resumen}</td>
    `;
    tabla.appendChild(tr);
  });
});