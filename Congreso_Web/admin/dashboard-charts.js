// Datos de ejemplo para los gráficos
const inscripcionesData = {
    labels: ['01/May', '02/May', '03/May', '04/May', '05/May', '06/May', '07/May'],
    datasets: [{
        label: 'Inscripciones',
        data: [15, 20, 10, 25, 18, 30, 24],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const ponenciasData = {
    labels: ['Aprobadas', 'Pendientes', 'Rechazadas'],
    datasets: [{
        label: 'Ponencias',
        data: [80, 50, 26],
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

const rolesData = {
    labels: ['Asistentes', 'Ponentes', 'Administradores'],
    datasets: [{
    label: 'Usuarios',
    data: [300, 100, 23],
        backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(201, 203, 207, 0.6)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
                    'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
        }]
    };

// Configuración y renderizado de los gráficos
document.addEventListener('DOMContentLoaded', function() {
// Gráfico de Inscripciones por Día
    const inscripcionesCtx = document.getElementById('inscripcionesChart').getContext('2d');
    new Chart(inscripcionesCtx, {
        type: 'line',
        data: inscripcionesData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Ponencias por Estado
    const ponenciasCtx = document.getElementById('ponenciasChart').getContext('2d');
    new Chart(ponenciasCtx, {
        type: 'pie',
        data: ponenciasData,
        options: {
            responsive: true,
        }
    });

    // Gráfico de Usuarios por Rol
    const rolesCtx = document.getElementById('rolesChart').getContext('2d');
    new Chart(rolesCtx, {
        type: 'doughnut',
        data: rolesData,
        options: {
            responsive: true,
        }
    });
});