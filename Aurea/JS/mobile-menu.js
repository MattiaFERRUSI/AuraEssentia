document.addEventListener("DOMContentLoaded", function () {
    // Seleziona gli elementi principali
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");
    const content = document.querySelector(".content");
  
    // Funzione per aprire il menu
    function openMenu() {
      mobileMenu.classList.add("active");
      overlay.classList.add("active");
      if (content) {
        content.classList.add("blur");
      }
      console.log("Menu aperto");
    }
  
    // Funzione per chiudere il menu
    function closeMenu() {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
      if (content) {
        content.classList.remove("blur");
      }
      console.log("Menu chiuso");
    }
  
    // Event listener per il pulsante hamburger (se presente)
    if (hamburger) {
      hamburger.addEventListener("click", function (e) {
        e.preventDefault();
        openMenu();
      });
    } else {
      console.error("Elemento hamburger non trovato");
    }
  
    // Event listener per il pulsante di chiusura (X)
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        closeMenu();
      });
    } else {
      console.error("Elemento closeBtn non trovato");
    }
  
    // Event listener per chiudere il menu cliccando sull'overlay
    if (overlay) {
      overlay.addEventListener("click", function (e) {
        e.preventDefault();
        closeMenu();
      });
    }
  
    // Event listener per gestire il toggle dei sottomenu
    document.querySelectorAll('.has-submenu > a').forEach(function (topLevelLink) {
      topLevelLink.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      });
    });
  });
  