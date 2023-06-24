window.onload = function () {
  document.querySelector('figure.embed-container').style.display = 'none'
  document.querySelector('img.play').addEventListener('click', loadVideo)
}

function loadVideo (e) {
  e.target.style.display = 'none'
  document.querySelector('figure.embed-container').style.display = 'block'
}
