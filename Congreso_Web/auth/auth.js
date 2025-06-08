function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMessage");

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