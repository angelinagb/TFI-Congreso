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
