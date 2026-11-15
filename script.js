document.addEventListener("DOMContentLoaded", function () {
  // Menu Mobile
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
    });

    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
      });
    });
  }

  // Envio do formulário direto para o WhatsApp da MS Distribuidora
  const whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const loja = document.getElementById("loja").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      const texto = `Olá, equipe MS Distribuidora!%0A*Nome:* ${encodeURIComponent(nome)}%0A*Loja/Cidade:* ${encodeURIComponent(loja)}%0A*Mensagem:* ${encodeURIComponent(mensagem)}`;
      const numeroWhatsApp = "5551991364247";

      window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank", "noopener");
    });
  }
});
