// Interatividade básica para o site
document.addEventListener("DOMContentLoaded", () => {
    console.log("MS Distribuidora carregada com sucesso!");
    
    // Suave rolagem para âncoras internas
    const links = document.querySelectorAll('nav a, .hero a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
