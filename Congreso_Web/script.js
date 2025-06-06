document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = 
            dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Cierra los dropdowns si se hace clic fuera de ellos
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});

// Controlar el botón hamburguesa
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Controlar los dropdowns
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = this.parentElement;
        const dropdownContent = this.nextElementSibling;

        // En móviles, toggle del dropdown
        if (window.innerWidth <= 768) {
            dropdown.classList.toggle('active');
        } else {
            // En pantallas grandes, mantener el hover del CSS
            dropdownContent.style.display = 
                dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Cierra los dropdowns y el menú si se hace clic fuera de ellos
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger') && !e.target.closest('.nav-list')) {
        // Cerrar todos los dropdowns
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        // Cerrar el menú hamburguesa
        navList.classList.remove('active');
    }
});


  // Fecha objetivo del congreso (25 de Octubre de 2026, 9:00 am por ejemplo)
  const countdownDate = new Date("Octubre 25, 2026 09:00:00").getTime();

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById('countdown').innerHTML = "<p>¡El tiempo llegó!</p>";
        return;
      }

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown(); // Llamada inicial
    setInterval(updateCountdown, 1000); // Actualiza cada segundo
//   }, 1000);

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
