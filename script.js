document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const dispositivo = document.getElementById('dispositivo').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            const telefoneLoja = '5551998856614';
            const texto = `Olá, VTech! Meu nome é *${nome}*.\n*Aparelho/Serviço:* ${dispositivo}\n*Detalhes:* ${mensagem}`;
            const url = `https://wa.me/${telefoneLoja}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank');
        });
    }
});
