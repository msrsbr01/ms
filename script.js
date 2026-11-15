document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const aparelho = document.getElementById("aparelho").value;
      const mensagem = document.getElementById("mensagem").value.trim();

      const textoWhatsApp = encodeURIComponent(
        `Olá, VTech! Meu nome é ${nome}. Gostaria de informações sobre: ${aparelho}. Detalhes: ${mensagem}`
      );
      const numeroLoja = "5551998856614";

      formFeedback.textContent = "Redirecionando para o WhatsApp da VTech Arroio do Meio...";
      window.open(`https://wa.me/${numeroLoja}?text=${textoWhatsApp}`, "_blank");
      contactForm.reset();
    });
  }
});
