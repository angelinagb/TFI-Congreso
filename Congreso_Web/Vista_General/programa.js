// --- Datos Simulados del Programa ---
const programaCompleto = {
	dia1: [
		{ hora: '08:30 - 09:00', actividad: 'Acreditación y Bienvenida', tipo: 'General', ponente: 'Comité Organizador', sala: 'Hall Principal' },
		{ hora: '09:00 - 09:30', actividad: 'Ceremonia de Apertura', tipo: 'General', ponente: 'Autoridades del Congreso', sala: 'Auditorio Principal' },
		{ hora: '09:30 - 10:30', actividad: 'Charlas Magistral 1: Inteligencia Artificial y Sociedad', tipo: 'Magistral', ponente: 'Dr. Ana Gómez', sala: 'Auditorio Principal' },
		{ hora: '10:30 - 11:00', actividad: 'Coffee Break', tipo: 'General', ponente: '', sala: 'Área de Exposiciones' },
		{ hora: '11:00 - 12:30', actividad: 'Ponencias Sesión A: Innovación en Big Data', tipo: 'Ponencias', ponente: 'Varios', sala: 'Sala 1' },
		{ hora: '11:00 - 12:30', actividad: 'Ponencias Sesión B: Ciberseguridad en IoT', tipo: 'Ponencias', ponente: 'Varios', sala: 'Sala 2' },
		{ hora: '12:30 - 14:00', actividad: 'Almuerzo Libre', tipo: 'General', ponente: '', sala: 'Comedor' },
		{ hora: '14:00 - 16:00', actividad: 'Taller 1: Desarrollo de Aplicaciones con IA', tipo: 'Taller', ponente: 'Ing. Juan Pérez', sala: 'Laboratorio 1' },
		{ hora: '14:00 - 16:00', actividad: 'Ponencias Sesión C: Educación Digital', tipo: 'Ponencias', ponente: 'Varios', sala: 'Sala 3' },
		{ hora: '16:00 - 16:30', actividad: 'Coffee Break', tipo: 'General', ponente: '', sala: 'Área de Exposiciones' },
		{ hora: '16:30 - 18:00', actividad: 'Mesa Redonda: El Futuro de la Gestión Tecnológica', tipo: 'Mesa Redonda', ponente: 'Panel de Expertos', sala: 'Auditorio Principal' },
		{ hora: '18:00 - 18:30', actividad: 'Cierre del Día 1', tipo: 'General', ponente: 'Comité Organizador', sala: 'Auditorio Principal' },
	],
	dia2: [
		{ hora: '09:00 - 10:00', actividad: 'Charlas Magistral 2: Blockchain y Trazabilidad', tipo: 'Magistral', ponente: 'Dra. Laura Fernández', sala: 'Auditorio Principal' },
		{ hora: '10:00 - 10:30', actividad: 'Coffee Break', tipo: 'General', ponente: '', sala: 'Área de Exposiciones' },
		{ hora: '10:30 - 12:00', actividad: 'Ponencias Sesión D: Realidad Virtual y Aumentada', tipo: 'Ponencias', ponente: 'Varios', sala: 'Sala 1' },
		{ hora: '10:30 - 12:00', actividad: 'Taller 2: Introducción a la Robótica Colaborativa', tipo: 'Taller', ponente: 'Ing. Marta Ríos', sala: 'Laboratorio 2' },
		{ hora: '12:00 - 13:30', actividad: 'Almuerzo Libre', tipo: 'General', ponente: '', sala: 'Comedor' },
		{ hora: '13:30 - 15:00', actividad: 'Ponencias Sesión E: Impacto de la Tecnología en la Salud', tipo: 'Ponencias', ponente: 'Varios', sala: 'Sala 2' },
		{ hora: '13:30 - 15:00', actividad: 'Sesión de Posters y Networking', tipo: 'Networking', ponente: 'Expositores de Posters', sala: 'Área de Exposiciones' },
		{ hora: '15:00 - 16:00', actividad: 'Panel de Discusión: Ética en la Tecnología', tipo: 'Panel', ponente: 'Panel de Expertos', sala: 'Auditorio Principal' },
		{ hora: '16:00 - 16:30', actividad: 'Coffee Break', tipo: 'General', ponente: '', sala: 'Área de Exposiciones' },
		{ hora: '16:30 - 18:00', actividad: 'Taller 3: Gestión de Proyectos Ágiles con Herramientas Digitales', tipo: 'Taller', ponente: 'Lic. Pablo Soto', sala: 'Laboratorio 1' },
		{ hora: '18:00 - 19:00', actividad: 'Cóctel de Confraternización', tipo: 'Social', ponente: 'Comité Organizador', sala: 'Terraza Principal' },
	],
	dia3: [
		{ hora: '09:00 - 10:00', actividad: 'Charlas Magistral 3: Sostenibilidad y Tecnología', tipo: 'Magistral', ponente: 'Dra. Sofía Castro', sala: 'Auditorio Principal' },
		{ hora: '10:00 - 10:30', actividad: 'Coffee Break', tipo: 'General', ponente: '', sala: 'Área de Exposiciones' },
		{ hora: '10:30 - 12:00', actividad: 'Ponencias Sesión F: Transformación Digital en PYMES', tipo: 'Ponencias', ponente: 'Varios', sala: 'Sala 1' },
		{ hora: '10:30 - 12:00', actividad: 'Taller 4: Design Thinking para la Innovación', tipo: 'Taller', ponente: 'Lic. Carla Ruiz', sala: 'Laboratorio 2' },
		{ hora: '12:00 - 13:30', actividad: 'Almuerzo Libre', tipo: 'General', ponente: '', sala: 'Comedor' },
		{ hora: '13:30 - 15:00', actividad: 'Ponencias Sesión G: Gobierno Digital y Servicios Públicos', tipo: 'Ponencias', ponente: 'Varios', sala: 'Sala 3' },
		{ hora: '15:00 - 16:00', actividad: 'Sesión de Preguntas y Respuestas con Expertos', tipo: 'Panel', ponente: 'Panel de Expertos', sala: 'Auditorio Principal' },
		{ hora: '16:00 - 16:30', actividad: 'Coffee Break', tipo: 'General', ponente: '', sala: 'Área de Exposiciones' },
		{ hora: '16:30 - 17:30', actividad: 'Conferencia de Clausura: Desafíos Futuros de la Tecnología', tipo: 'Magistral', ponente: 'Dr. Roberto Vargas', sala: 'Auditorio Principal' },
		{ hora: '17:30 - 18:00', actividad: 'Premios - Sede - Evaluación Nueva Sede', tipo: 'General', ponente: 'Comité Organizador', sala: 'Auditorio Principal' },
		{ hora: '18:00 - 19:00', actividad: 'Brindis de camaradería', tipo: 'Social', ponente: 'Comité Organizador', sala: 'Terraza Principal' },
	],
};

document.addEventListener('DOMContentLoaded', () => {
	// Referencias a los filtros
	const armarProgramaMobile = () => {
		const tableContainer = document.getElementsByClassName("table-container")[0];
		tableContainer.replaceChildren();
		programaCompleto["dia1"].forEach(actividad => {
			const actCard = document.createElement("div");
			actCard.classList.add("custom-card");
			actCard.innerHTML = `
			  <div class="row">
			    <h4>${actividad.actividad}</h4>
			    <h4>${actividad.hora}</h4>
			  </div>
			  <hr>
			  <p>Tipo: ${actividad.tipo}</p>
			  <p>Ponente: ${actividad.ponente}</p>
			  <p>Sala: ${actividad.sala}</p>
			`;
			tableContainer.appendChild(actCard);
		});
	};
	const armarProgramaDesktop = () => {
		// --- Lógica para programa_diaX.html (Tablas de Detalle por Día) ---
		const programaDiaTableBody = document.getElementById('programaDiaTable')?.querySelector('tbody');
		const pageDayId = document.body.getAttribute('data-programa-dia');
		const tituloDiaElement = document.getElementById('tituloDia');

		if (programaDiaTableBody && pageDayId) {
			console.log(`Elemento programaDiaTableBody encontrado para el día: ${pageDayId}. Llenando tabla detallada...`);

			if (tituloDiaElement) {
				const dayMap = {
					'dia1': 'Día 1 (24 de Octubre de 2026)',
					'dia2': 'Día 2 (25 de Octubre de 2026)',
					'dia3': 'Día 3 (26 de Octubre de 2026)'
				};
				tituloDiaElement.textContent = `Programa Detallado - ${dayMap[pageDayId] || pageDayId}`;
				console.log(`Título del día actualizado a: ${tituloDiaElement.textContent}`);
			} else {
				console.warn('Elemento con ID "tituloDia" no encontrado en la página de detalle del día.');
			}

			const actividadesDelDia = programaCompleto[pageDayId];

			if (actividadesDelDia && actividadesDelDia.length > 0) {
				// Limpiar contenido previo del tbody antes de insertar
				programaDiaTableBody.innerHTML = '';

				actividadesDelDia.forEach(actividad => {
					const row = programaDiaTableBody.insertRow();
					let dataEl = row.insertCell();
					dataEl.textContent = `${actividad.hora}`;
					dataEl = row.insertCell();
					dataEl.textContent = `${actividad.actividad}`;
					dataEl = row.insertCell();
					dataEl.textContent = `${actividad.tipo}`;
					dataEl = row.insertCell();
					dataEl.textContent = `${actividad.ponente}`;
					dataEl = row.insertCell();
					dataEl.textContent = `${actividad.sala}`;
				});
				console.log(`Tabla detallada para ${pageDayId} llenada con ${actividadesDelDia.length} actividades.`);
			} else {
				console.warn(`No se encontraron datos de actividades para el día: ${pageDayId} o está vacío.`);
				programaDiaTableBody.innerHTML = '<tr><td colspan="5">No hay actividades programadas para este día.</td></tr>';
			}
		} else {
			console.log('Elemento programaDiaTableBody o data-programa-dia NO encontrado en esta página (esperado si es programa.html).');
		}
	};
	const tabla = document.getElementById('miCongresoTable');
	const inputBusqueda = document.getElementById('busquedaMiCongreso');
	const filtroDia = document.getElementById('filtroDia');
	const filtroTipo = document.getElementById('filtroTipo');
	const filtroHora = document.getElementById('filtroHora');
	const filtroPonente = document.getElementById('filtroPonente');
	const filtroFavoritasBtn = document.getElementById('filtroFavoritasBtn');
	let mostrarSoloFavoritas = false;
	// --- Estadísticas generales ---
	let totalPonencias = 0;
	let totalMagistrales = 0;
	let totalTalleres = 0;
	let totalDiasActividad = Object.keys(programaCompleto).length;


	function llenarSelects() {
		const horasSet = new Set();
		const ponentesSet = new Set();
		Object.keys(programaCompleto).forEach(diaKey => {
			programaCompleto[diaKey].forEach(actividad => {
				horasSet.add(actividad.hora);
				if (actividad.ponente) ponentesSet.add(actividad.ponente);
			});
		});
		filtroHora.innerHTML = '<option value="">Todas las horas</option>' +
			Array.from(horasSet).map(h => `<option value="${h}">${h}</option>`).join('');
		filtroPonente.innerHTML = '<option value="">Todos los ponentes</option>' +
			Array.from(ponentesSet).map(p => `<option value="${p}">${p}</option>`).join('');
	}
	if (filtroHora && filtroPonente) llenarSelects();


	for (const diaKey in programaCompleto) {
		programaCompleto[diaKey].forEach(actividad => {
			if (actividad.tipo === 'Ponencias') totalPonencias++;
			else if (actividad.tipo === 'Magistral') totalMagistrales++;
			else if (actividad.tipo === 'Taller') totalTalleres++;
		});
	}
	// Crea el botón de filtro si no existe
	if (tabla && !filtroFavoritasBtn) {
		const btn = document.createElement('button');
		btn.id = 'filtroFavoritasBtn';
		btn.textContent = 'Ver solo favoritas';
		btn.style.margin = '10px 0 10px 10px';
		tabla.parentNode.insertBefore(btn, tabla);
	}
	function renderizarTablaMiCongreso() {
		const tbody = tabla.querySelector('tbody');
		tbody.innerHTML = '';
		const favoritos = JSON.parse(localStorage.getItem('favoritosCongreso') || '[]');
		const textoBusqueda = (inputBusqueda?.value || '').toLowerCase();
		const diaFiltro = filtroDia?.value || '';
		const tipoFiltro = filtroTipo?.value || '';
		const horaFiltro = filtroHora?.value || '';
		const ponenteFiltro = filtroPonente?.value || '';

		Object.keys(programaCompleto).forEach(diaKey => {
			const actividades = programaCompleto[diaKey];
			actividades.forEach((actividad, idx) => {
				const actividadId = `${diaKey}-${idx}`;
				const esFavorita = favoritos.includes(actividadId);

				// Filtros
				if (mostrarSoloFavoritas && !esFavorita) return;
				if (diaFiltro && diaKey.replace('dia', 'Día ') !== diaFiltro) return;
				if (tipoFiltro && actividad.tipo !== tipoFiltro) return;
				if (horaFiltro && actividad.hora !== horaFiltro) return;
				if (ponenteFiltro && actividad.ponente !== ponenteFiltro) return;

				// Filtro de búsqueda general
				const textoFila = [
					diaKey.replace('dia', 'Día '),
					actividad.hora,
					actividad.actividad,
					actividad.tipo,
					actividad.ponente,
					actividad.sala
				].join(' ').toLowerCase();
				if (textoBusqueda && !textoFila.includes(textoBusqueda)) return;

				const fila = document.createElement('tr');
				fila.innerHTML = `
                    <td>${diaKey.replace('dia', 'Día ')}</td>
                    <td>${actividad.hora}</td>
                    <td>${actividad.actividad}</td>
                    <td>${actividad.tipo}</td>
                    <td>${actividad.ponente}</td>
                    <td>${actividad.sala}</td>
                    <td>
                        <button class="btn-favorito" data-id="${actividadId}" aria-label="Marcar como favorita">
                            <span style="font-size:1.2em; color:${esFavorita ? 'gold' : '#ccc'};">&#9733;</span>
                        </button>
                    </td>
                `;
				tbody.appendChild(fila);
			});
		});
	}
	// Listeners para filtros y búsqueda
	[inputBusqueda, filtroDia, filtroTipo, filtroHora, filtroPonente].forEach(filtro => {
		if (filtro) filtro.addEventListener('input', renderizarTablaMiCongreso);
	});


	// Inicializa la tabla
	if (tabla) renderizarTablaMiCongreso();

	// --- Búsqueda en la tabla ---
	if (inputBusqueda && tabla) {
		inputBusqueda.addEventListener('keyup', function() {
			const filtro = this.value.toLowerCase();
			const filas = tabla.getElementsByTagName('tr');
			for (let i = 1; i < filas.length; i++) {
				const fila = filas[i];
				const textoFila = fila.textContent.toLowerCase();
				fila.style.display = textoFila.includes(filtro) ? '' : 'none';
			}
		});
	}

	// --- Marcar/desmarcar como favorita ---
	if (tabla) {
		const tbody = tabla.querySelector('tbody');
		tbody.addEventListener('click', function(e) {
			if (e.target.closest('.btn-favorito')) {
				const btn = e.target.closest('.btn-favorito');
				const id = btn.getAttribute('data-id');
				let favoritos = JSON.parse(localStorage.getItem('favoritosCongreso') || '[]');
				const star = btn.querySelector('span');
				if (favoritos.includes(id)) {
					favoritos = favoritos.filter(fav => fav !== id);
					star.style.color = '#ccc';
				} else {
					favoritos.push(id);
					star.style.color = 'gold';
				}
				localStorage.setItem('favoritosCongreso', JSON.stringify(favoritos));
				renderizarTablaMiCongreso();
			}
		});
	}

	// --- Filtro de favoritas ---
	const filtroBtn = document.getElementById('filtroFavoritasBtn');
	if (filtroBtn) {
		filtroBtn.addEventListener('click', function() {
			mostrarSoloFavoritas = !mostrarSoloFavoritas;
			filtroBtn.textContent = mostrarSoloFavoritas ? 'Ver todas' : 'Ver solo favoritas';
			renderizarTablaMiCongreso();

			// Mostrar mensaje si no hay favoritas
			if (mostrarSoloFavoritas) {
				const tbody = tabla.querySelector('tbody');
				if (tbody.children.length === 0) {
					const row = document.createElement('tr');
					row.style.backgroundColor = '#e3f4fd'; // celeste claro
					row.innerHTML = `
						<td colspan="7" style="text-align:center; color:#888;">
							Haz click en 
							<span style="font-size:1.2em; color:gold; text-shadow: 0 0 2px #555, 0 0 1px #000;">&#9733;</span>
							para agregar una actividad como favorita
						</td>
					`;
					tbody.appendChild(row);
				}
			}
		});
	}
	// Estadísticas
	const elemTotalPonencias = document.getElementById('totalPonencias');
	if (elemTotalPonencias) elemTotalPonencias.textContent = totalPonencias;

	const elemTotalMagistrales = document.getElementById('totalMagistrales');
	if (elemTotalMagistrales) elemTotalMagistrales.textContent = totalMagistrales;

	const elemTotalTalleres = document.getElementById('totalTalleres');
	if (elemTotalTalleres) elemTotalTalleres.textContent = totalTalleres;

	const elemTotalDiasActividad = document.getElementById('totalDiasActividad');
	if (elemTotalDiasActividad) elemTotalDiasActividad.textContent = totalDiasActividad;

	// --- Tabla Resumen ---
	const programaResumenTableBody = document.getElementById('programaResumenTable')?.querySelector('tbody');
	if (programaResumenTableBody) {
		const resumenDias = [
			{
				dia: 'Día 1',
				fecha: '24 de Octubre de 2026',
				ponencias: programaCompleto.dia1.filter(a => a.tipo === 'Ponencias').length,
				magistrales: programaCompleto.dia1.filter(a => a.tipo === 'Magistral').length,
				talleres: programaCompleto.dia1.filter(a => a.tipo === 'Taller').length,
				highlights: 'Apertura oficial, Charla de IA y Sesiones de Big Data y Ciberseguridad.',
				link: 'programa_dia1.html'
			},
			{
				dia: 'Día 2',
				fecha: '25 de Octubre de 2026',
				ponencias: programaCompleto.dia2.filter(a => a.tipo === 'Ponencias').length,
				magistrales: programaCompleto.dia2.filter(a => a.tipo === 'Magistral').length,
				talleres: programaCompleto.dia2.filter(a => a.tipo === 'Taller').length,
				highlights: 'Charlas de Blockchain, Talleres de Robótica y Sesión de Posters.',
				link: 'programa_dia2.html'
			},
			{
				dia: 'Día 3',
				fecha: '26 de Octubre de 2026',
				ponencias: programaCompleto.dia3.filter(a => a.tipo === 'Ponencias').length,
				magistrales: programaCompleto.dia3.filter(a => a.tipo === 'Magistral').length,
				talleres: programaCompleto.dia3.filter(a => a.tipo === 'Taller').length,
				highlights: 'Cierre con Conferencia de Sostenibilidad y Ceremonia de Clausura.',
				link: 'programa_dia3.html'
			}
		];
		programaResumenTableBody.innerHTML = '';
		resumenDias.forEach(dia => {
			const row = programaResumenTableBody.insertRow();
			row.innerHTML = `
				<td>${dia.dia}</td>
				<td>${dia.fecha}</td>
				<td>${dia.ponencias}</td>
				<td>${dia.magistrales}</td>
				<td>${dia.talleres}</td>
				<td>${dia.highlights}</td>
				<td><a href="${dia.link}" class="btn-sm btn-details">Ver Programa</a></td>
			`;
		});
	}

	// Responsive: mobile o desktop
	if (window.innerWidth < 743) {
		armarProgramaMobile();
	} else {
		armarProgramaDesktop();
	}

	// --- Buscador en Mi Congreso ---
	// Ya se declararon inputBusqueda y tabla arriba, así que solo usar esas variables aquí.
	if (inputBusqueda && tabla) {
		inputBusqueda.addEventListener('keyup', function() {
			const filtro = this.value.toLowerCase();
			const filas = tabla.getElementsByTagName('tr');
			for (let i = 1; i < filas.length; i++) {
				const fila = filas[i];
				const textoFila = fila.textContent.toLowerCase();
				fila.style.display = textoFila.includes(filtro) ? '' : 'none';
			}
		});
	}

	// --- Llenar tabla Mi Congreso ---
	if (tabla) {
		const tbody = tabla.querySelector('tbody');
		tbody.innerHTML = '';
		const dias = Object.keys(programaCompleto);
		dias.forEach(diaKey => {
			const actividades = programaCompleto[diaKey];
			actividades.forEach(actividad => {
				const fila = document.createElement('tr');
				fila.innerHTML = `
					<td>${diaKey.replace('dia', 'Día ')}</td>
					<td>${actividad.hora}</td>
					<td>${actividad.actividad}</td>
					<td>${actividad.tipo}</td>
					<td>${actividad.ponente}</td>
					<td>${actividad.sala}</td>
				`;
				tbody.appendChild(fila);
			});
		});
	}

	// --- Tabla de Favoritas ---
	const tablaFav = document.getElementById('favoritasTable');
	if (tablaFav) {
		const tbody = tablaFav.querySelector('tbody');
		tbody.innerHTML = '';
		const favoritos = JSON.parse(localStorage.getItem('favoritosCongreso') || '[]');
		const dias = Object.keys(programaCompleto);
		dias.forEach(diaKey => {
			const actividades = programaCompleto[diaKey];
			actividades.forEach((actividad, idx) => {
				const actividadId = `${diaKey}-${idx}`;
				if (favoritos.includes(actividadId)) {
					const fila = document.createElement('tr');
					fila.innerHTML = `
						<td>${diaKey.replace('dia', 'Día ')}</td>
						<td>${actividad.hora}</td>
						<td>${actividad.actividad}</td>
						<td>${actividad.tipo}</td>
						<td>${actividad.ponente}</td>
						<td>${actividad.sala}</td>
						<td>
							<button class="btn-favorito" data-id="${actividadId}" aria-label="Marcar como favorita">
								<span style="font-size:1.2em; color:gold;">&#9733;</span>
							</button>
						</td>
					`;
					tbody.appendChild(fila);
				}
			});
		});
		tbody.addEventListener('click', function(e) {
			if (e.target.closest('.btn-favorito')) {
				const btn = e.target.closest('.btn-favorito');
				const id = btn.getAttribute('data-id');
				let favoritos = JSON.parse(localStorage.getItem('favoritosCongreso') || '[]');
				if (favoritos.includes(id)) {
					favoritos = favoritos.filter(fav => fav !== id);
					localStorage.setItem('favoritosCongreso', JSON.stringify(favoritos));
					btn.closest('tr').remove();
				}
			}
		});
	}
});
