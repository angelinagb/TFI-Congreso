function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMessage");

  // Limpiar mensaje de error previo
  errorMsg.textContent = "";
  errorMsg.style.display = "none";

  // Busca el usuario por email
  const usuario = usuarios.find(u => u.email === email);

  if (usuario && usuario.password === password) {
    localStorage.setItem("usuario", usuario.email);
    localStorage.setItem("categoria", usuario.categoria);
    window.location.href = usuario.ruta;
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
}

function logout() {
  if (confirm("¿Cerrar sesión?")) {
    localStorage.removeItem("usuario");
    localStorage.removeItem("categoria");
    window.location.href = "login.html";
  }
}

// --- Lógica de Registro y login (Añadida y modificada para el DNI) ---
document.addEventListener('DOMContentLoaded', () => {

     // Para el formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            login(); // Llama a tu función de login existente
        });
    }

    // Para el formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío por defecto del formulario

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim().toLowerCase();
            const password = document.getElementById('password').value;
            const dni = document.getElementById('dni').value.trim(); // <-- CAPTURA EL DNI
            const categoriaElement = document.querySelector('input[name="categoria"]:checked');
            const categoria = categoriaElement ? categoriaElement.value : 'asistente';
            const areaTematicaElement = document.getElementById('areaTematica');
            // Asegúrate de que campoArea existe antes de intentar obtener su estilo
            const campoAreaStyle = document.getElementById('campoArea')?.style.display;
            const areaTematica = (categoria === 'ponente' && campoAreaStyle !== 'none') ? areaTematicaElement.value : '';


            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');

            // Limpiar mensajes de error/éxito previos
            errorMessage.style.display = 'none';
            successMessage.style.display = 'none';

            // 1. Validación básica de campos obligatorios
            if (!nombre || !email || !password || !dni) { // <-- AÑADE DNI AQUÍ
                errorMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
                errorMessage.style.display = 'block';
                return;
            }

            // 2. Validación de longitud de contraseña
            if (password.length < 8) {
                errorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres.';
                errorMessage.style.display = 'block';
                return;
            }

            // 3. Validación de formato de DNI (solo números, 7-9 dígitos)
            if (!/^[0-9]{7,9}$/.test(dni)) { // <-- VALIDACIÓN DEL DNI
                errorMessage.textContent = 'El DNI debe contener solo números y tener entre 7 y 9 dígitos.';
                errorMessage.style.display = 'block';
                return;
            }

            // 4. Simular el registro (añadir al arreglo `usuarios`)
            // En un sistema real, aquí harías una llamada a tu servidor para guardar los datos.

            // 5. Verificar si el email o DNI ya existen (simulado)
            // Asegúrate de que `usuarios` esté disponible globalmente (cargando usuarios_simulados.js antes)
            if (typeof usuarios !== 'undefined') {
                if (usuarios.some(u => u.email === email)) {
                    errorMessage.textContent = 'El correo electrónico ya está registrado.';
                    errorMessage.style.display = 'block';
                    return;
                }
                if (usuarios.some(u => u.dni === dni)) { // <-- VALIDACIÓN DE DNI DUPLICADO
                    errorMessage.textContent = 'El DNI ya está registrado.';
                    errorMessage.style.display = 'block';
                    return;
                }

                // Si todo es válido y no hay duplicados, crea el nuevo usuario simulado
                const nuevoUsuario = {
                    nombre: nombre,
                    email: email,
                    password: password, // NOTA: En un sistema real, nunca guardarías contraseñas en texto plano.
                    dni: dni,           // <-- AÑADE EL DNI AQUÍ
                    categoria: categoria,
                    ruta: `../${categoria}/dashboard-${categoria}.html` // Asumiendo estructura de rutas
                };

                usuarios.push(nuevoUsuario); // Añade el nuevo usuario al arreglo
                console.log('Usuario registrado (simulado):', nuevoUsuario);
                console.log('Usuarios actuales (simulados):', usuarios); // Para depuración

                successMessage.textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
                successMessage.style.display = 'block';
                this.reset(); // Limpia el formulario después del registro exitoso

                // Opcional: Redirigir al usuario a la página de login después de un breve retraso
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000); // Redirige después de 2 segundos
            } else {
                errorMessage.textContent = 'Error interno: La base de datos simulada no está disponible.';
                errorMessage.style.display = 'block';
            }
        });
    }

    // Lógica para mostrar/ocultar el campo de "Área Temática"
    const radioButtonsCategoria = document.querySelectorAll('input[name="categoria"]');
    const campoArea = document.getElementById('campoArea');

    if (radioButtonsCategoria.length > 0 && campoArea) {
        radioButtonsCategoria.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'ponente') {
                    campoArea.style.display = 'block';
                } else {
                    campoArea.style.display = 'none';
                }
            });
        });
    }
});