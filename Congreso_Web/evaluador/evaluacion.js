document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ponenciaId = urlParams.get('id');

  const ponenciaTitulo = document.getElementById('ponenciaTitulo');
  const ponenciaIdElem = document.getElementById('ponenciaId');
  // const ponenciaAutor = document.getElementById('ponenciaAutor'); // REMOVIDO
  const ponenciaEje = document.getElementById('ponenciaEje');
  const ponenciaResumen = document.getElementById('ponenciaResumen');
  const ponenciaInfografia = document.getElementById('ponenciaInfografia');
  const ponenciaInforme = document.getElementById('ponenciaInforme');
  const feedbackTextArea = document.getElementById('feedback');
  const calificacionInput = document.getElementById('calificacion');
  const btnAprobar = document.getElementById('btnAprobar');
  const btnRechazar = document.getElementById('btnRechazar');
  const btnGuardarFeedback = document.getElementById('btnGuardarFeedback');

  // Simulación de datos de ponencias (¡Autor REMOVIDO!)
  const ponenciasAsignadas = [
    {
      ponencia_id: "P-001",
      titulo: 'Impacto de la Inteligencia Artificial en los videojuegos',
      fecha_asignacion: "2025-05-20",
      estado_evaluacion: "Pendiente",
      feedback: "",
      calificacion: null,
      resumen: "Un análisis de cómo la IA está transformando la industria de los videojuegos, desde la creación de personajes hasta la generación de mundos abiertos.",
      eje_tematico: "Innovación y Tecnología",
      infografia: "https://example.com/infografia1.png",
      informe_investigacion: "https://example.com/informe1.pdf",
    },
    {
      ponencia_id: "P-004",
      titulo: 'Big Data y su aplicación en salud pública',
      fecha_asignacion: "2025-05-15",
      estado_evaluacion: "Aprobada",
      feedback: "Excelente investigación, muy relevante para el campo.",
      calificacion: 9,
      resumen: "Estudio sobre el uso de Big Data para mejorar la prevención y gestión de enfermedades.",
      eje_tematico: "Salud Digital",
      infografia: "https://example.com/infografia4.png",
      informe_investigacion: "https://example.com/informe4.pdf",
    },
    {
      ponencia_id: "P-005",
      titulo: 'Ciberseguridad en IoT: Desafíos y soluciones',
      fecha_asignacion: "2025-05-22",
      estado_evaluacion: "Pendiente",
      feedback: "",
      calificacion: null,
      resumen: "Análisis de las vulnerabilidades y estrategias de protección para dispositivos IoT.",
      eje_tematico: "Seguridad Informática",
      infografia: "https://example.com/infografia5.png",
      informe_investigacion: "https://example.com/informe5.pdf",
    }
  ];

  const ponenciaActual = ponenciasAsignadas.find(p => p.ponencia_id === ponenciaId);

  if (ponenciaActual) {
    ponenciaTitulo.textContent = ponenciaActual.titulo;
    ponenciaIdElem.textContent = ponenciaActual.ponencia_id;
    // ponenciaAutor.textContent = ponenciaActual.autor; // REMOVIDO
    ponenciaEje.textContent = ponenciaActual.eje_tematico;
    ponenciaResumen.textContent = ponenciaActual.resumen;
    ponenciaInfografia.href = ponenciaActual.infografia;
    ponenciaInforme.href = ponenciaActual.informe_investigacion;

    feedbackTextArea.value = ponenciaActual.feedback || '';
    calificacionInput.value = ponenciaActual.calificacion || '';

    if (ponenciaActual.estado_evaluacion !== "Pendiente") {
        feedbackTextArea.disabled = true;
        calificacionInput.disabled = true;
        btnAprobar.style.display = 'none';
        btnRechazar.style.display = 'none';
        btnGuardarFeedback.style.display = 'none';
    }

  } else {
    ponenciaTitulo.textContent = 'Ponencia no encontrada.';
    document.querySelector('.chart-container').innerHTML = '<p>La ponencia solicitada no existe o no está asignada a usted.</p>';
  }

  btnAprobar.addEventListener('click', () => {
    alert(`Ponencia "${ponenciaActual.titulo}" APROBADA.`);
    ponenciaActual.estado_evaluacion = "Aprobada";
    ponenciaActual.feedback = feedbackTextArea.value;
    ponenciaActual.calificacion = calificacionInput.value;
    window.location.href = `evaluador.html`;
  });

  btnRechazar.addEventListener('click', () => {
    alert(`Ponencia "${ponenciaActual.titulo}" RECHAZADA.`);
    ponenciaActual.estado_evaluacion = "Rechazada";
    ponenciaActual.feedback = feedbackTextArea.value;
    ponenciaActual.calificacion = calificacionInput.value;
    window.location.href = `evaluador.html`;
  });

  btnGuardarFeedback.addEventListener('click', () => {
    alert(`Feedback y calificación guardados para "${ponenciaActual.titulo}".`);
    ponenciaActual.feedback = feedbackTextArea.value;
    ponenciaActual.calificacion = calificacionInput.value;
  });
});