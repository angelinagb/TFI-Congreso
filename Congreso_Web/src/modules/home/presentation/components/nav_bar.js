export class NavBar extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
		<style>
.navbar {
  background-color: #1e3a8a;
  padding: 10px 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav-list li {
  position: relative;
  margin: 0 20px;
}

.nav-list li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  display: block;
}

.nav-list li a:hover {
  color: #b3d4fc;
}

/* Estilos para el dropdown */
.dropdown .dropbtn {
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #1e3a8a;
  min-width: 150px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100; 
  top: 100%;
  left: 0;
  transition: all 0.3s ease;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #2b4db3;
}

/* Submenú anidado */
.sub-dropdown .dropdown-content {
    top: 100%; /* Posiciona debajo del elemento padre */
    left: 0; /* Alinea con el borde izquierdo */
    z-index: 102;
}

/* Estilo de la flecha */
.arrow {
  font-size: 12px;
  margin-left: 5px;
  display: inline-block;
  transition: transform 0.3s ease;
}
		</style>
    <nav class="navbar">
      <div class="hamburger">
        ☰
      </div>
      <ul class="nav-list">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn" aria-haspopup="true" aria-expanded="false">Congreso <span class="arrow">▼</span></a>
          <div class="dropdown-content">
            <a href="#">Organizadores</a> <a href="#">Autoridades</a> <a href="#">Auspician</a> <a href="#">Sponsors</a> <a href="#">Premios</a>
            <div class="sub-dropdown">
              <a href="#" class="dropbtn" aria-haspopup="true" aria-expanded="false">Eventos Anteriores <span class="arrow">▼</span></a>
              <div class="dropdown-content">
                <a href="https://fcefyn.unc.edu.ar/extension/vi-encuentro-nacional-de-gestores-tecnologicos/">VI Encuentro de Gestores Tecnológicos</a> <a href="#">Otro</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#">Sede</a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn" aria-haspopup="true" aria-expanded="false">Programa <span class="arrow">▼</span></a>
          <div class="dropdown-content">
            <a href="#">Opción 1</a> <a href="#">Opción 2</a> <a href="#">Opción 3</a>
          </div>
        </li>
        <li>
          <a href="src/modules/inscripciones/presentation/pages/inscripciones.html">Inscripciones</a>
        </li>
        <li>
          <a href="#">Abstracts</a>
        </li>
        <li>
          <a href="#">Oradores</a>
        </li>
        <li>
          <a href="#">Alojamiento</a>
        </li>
        <li>
          <a href="#">Turismo</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Certificados 2026</a>
        </li>
      </ul>
    </nav>
        `;
// Controlar el botón hamburguesa
const hamburger = this.shadow.querySelector('.hamburger');
const navList = this.shadow.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
	navList.classList.toggle('active');
});

// Controlar los dropdowns
this.shadow.querySelectorAll('.dropbtn').forEach(button => {
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
	}
}
