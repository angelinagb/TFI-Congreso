document.addEventListener('DOMContentLoaded', function() {
    // Hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    // Dropdowns
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                dropdownContent.style.display = 
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Cierra los dropdowns si se hace clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
        // Cierra el menú hamburguesa si se hace clic fuera
        if (!e.target.closest('.hamburger') && !e.target.closest('.nav-list')) {
            if (navList) navList.classList.remove('active');
        }
    });

    // Cuenta regresiva (solo si existen los elementos)
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    // Cambia la fecha objetivo según tu evento
    const countdownDate = new Date("June 24, 2025 09:00:00").getTime();

    function updateCountdown() {
        if (!(days && hours && minutes && seconds)) return;
        const now = new Date().getTime();
        const diff = countdownDate - now;

        if (diff <= 0) {
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
            return;
        }

        const s = Math.floor((diff / 1000) % 60);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));

        days.textContent = String(d).padStart(2, '0');
        hours.textContent = String(h).padStart(2, '0');
        minutes.textContent = String(m).padStart(2, '0');
        seconds.textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Lógica para el modal de Novedades
    const btnNovedades = document.getElementById('btnNovedades');
    const novedadesModal = document.getElementById('novedades-modal');
    const closeButton = document.querySelector('#novedades-modal .close-button');
    const novedadesForm = document.getElementById('novedades-form');

    if (btnNovedades && novedadesModal && closeButton && novedadesForm) {
        btnNovedades.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el enlace recargue la página
            novedadesModal.style.display = 'flex'; // Cambia a 'flex' para centrar con justify/align
        });

        closeButton.addEventListener('click', function() {
            novedadesModal.style.display = 'none';
        });

        // Cerrar el modal si se hace clic fuera del contenido del modal
        window.addEventListener('click', function(e) {
            if (e.target === novedadesModal) {
                novedadesModal.style.display = 'none';
            }
        });

        novedadesForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío por defecto del formulario

            const nombre = document.getElementById('novedades-nombre').value.trim();
            const email = document.getElementById('novedades-email').value.trim();

            if (!email) {
                alert('Por favor, ingresa tu correo electrónico para suscribirte a las novedades.');
                return;
            }

            // Aquí es donde enviarías los datos al servidor.
            // Por ahora, simularemos el envío y mostraremos una alerta.
            console.log(`Subscribing: Nombre - ${nombre}, Email - ${email}`);

            alert(`¡Gracias ${nombre ? nombre : ''} por suscribirte! Recibirás novedades en ${email}.`);

            // Limpiar el formulario y cerrar el modal
            novedadesForm.reset();
            novedadesModal.style.display = 'none';
        });
    }
});
  //validacion del formulario de inscripción
  document.querySelector('.formulario')?.addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = this.nombre.value.trim();
    const email = this.email.value.trim();

    if(!nombre || !email){
        alert('Por favor, completa todos los campos.');
        return;
    }

    //Simular envio, aquí iría back
    alert(`¡Inscripcion exitosa, ${nombre}! Se envió un correo a ${email}`);
    this.reset();
  });

