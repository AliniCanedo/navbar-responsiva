/* Quando o usuario clica no botão, 
      alterna entre fechar e abrir o conteudo do dropdown do topbar */
function onDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// Quando o usuario clicar no botão, altera entre fechar e abrir o sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "170px";
  document.getElementById("main").style.display = "none";
  document.getElementById("conteudo").style.marginLeft = "190px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.display = "block";
  document.getElementById("conteudo").style.marginLeft = "0px";
}
