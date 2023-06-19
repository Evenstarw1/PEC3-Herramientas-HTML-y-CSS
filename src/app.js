const userName = prompt('Hola, ¿cuál es tu nombre?', '')

if (userName != null) {
  document.getElementById('welcomeMessage').innerHTML =
    'Hola ' + userName + '&#9829;'
} else {
  document.getElementById('welcomeMessage').innerHTML =
    'Hola desconocido &#9829;'
}
