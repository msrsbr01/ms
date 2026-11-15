// Exemplo simples de interação via JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site MS Distribuidora carregado com sucesso!");
    
    // Suavidade na rolagem dos links do menu
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if(targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
