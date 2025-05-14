window.addEventListener("scroll", function () {
    if (window.pageYOffset > 40) { // soglia di scroll
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });
  
  // banner sotto la navbar
  document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.getElementById("marquee");
    const content = marquee.innerHTML;
  
    // Duplica il contenuto per un effetto continuo
    marquee.innerHTML += content;
  
    // Opzione per velocità dinamica
    let speed = 30;
    marquee.style.animationDuration = speed + "s";
  });
  