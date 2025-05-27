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

  // Actualiza la cuenta regresiva cada 1 segundo
  const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar resultado en el div con id="countdown"
    document.getElementById("countdown").innerHTML = 
      `<strong>Cuenta regresiva:</strong> ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Si la cuenta regresiva termina
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "¡El congreso ha comenzado!";
    }
  }, 1000);