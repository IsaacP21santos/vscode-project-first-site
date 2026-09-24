import { toggleMenu } from './menu.js';
import { carregarPagina } from './router.js';

window.toggleMenu = toggleMenu;

document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(evento) {
        evento.preventDefault();
        const pagina = this.getAttribute('data-page');
        carregarPagina(pagina);
    });
});