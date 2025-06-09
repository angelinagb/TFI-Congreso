document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ponenciaId = urlParams.get('id');

  // Busca la ponencia por ID
  const ponencia = ponencias.find(p => String(p.ponencia_id) === String(ponenciaId));

  // Referencias a los elementos del DOM
  const ponenciaIdElem = document.getElementById('ponenciaId');
  const ponenciaAutor = document.getElementById('ponenciaAutor');
  const ponenciaFecha = document.getElementById('ponenciaFecha');
  const ponenciaEje = document.getElementById('ponenciaEje');
  const ponenciaResumen = document.getElementById('ponenciaResumen');
  const ponenciaEstado = document.getElementById('ponenciaEstado');
  const ponenciaTitulo = document.getElementById('ponenciaTitulo');
  const ponenciaInfografia = document.getElementById('ponenciaInfografia');
  const ponenciaInforme = document.getElementById('ponenciaInforme');

  if (ponencia) {
    ponenciaIdElem.textContent = ponencia.ponencia_id || '';
    ponenciaAutor.textContent = ponencia.autor_id || '';
    ponenciaFecha.textContent = ponencia.fecha || '';
    ponenciaEje.textContent = ponencia.eje_tematico || '';
    ponenciaResumen.textContent = ponencia.resumen || '';
    ponenciaEstado.textContent = ponencia.estado || '';
    ponenciaTitulo.textContent = ponencia.titulo || '';
    ponenciaInfografia.href = ponencia.infografia || '#';
    ponenciaInforme.href = ponencia.informe_investigacion || '#';
  } else {
    ponenciaTitulo.textContent = "Ponencia no encontrada";
  }

if (btnGuardarFeedback) {
  btnGuardarFeedback.addEventListener('click', () => {
      if (ponenciaActual) {
        alert(`Feedback y calificación guardados para "${ponenciaActual.titulo}".`);
        ponenciaActual.feedback = feedbackTextArea.value;
        ponenciaActual.calificacion = calificacionInput.value;
      } else {
        alert("No hay ponencia seleccionada.");
      }
    });
  }
});

