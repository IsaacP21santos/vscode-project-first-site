import { ativarFormulario } from './formulario.js';
import { gerarCardsProjetos } from './templates.js';
import { exibirTotalCadastros } from './storage.js';

export function carregarPagina(pagina) {
    if (pagina === 'home') {
        document.getElementById('conteudo').innerHTML = `
            <section>
                <h2>Quem somos</h2>
                <p>Nós somos uma ONG que nasceu da necessidade de cuidar do próximo...</p>
            </section>
        `;
        return;
    }

    fetch('html/' + pagina + '.html')
        .then(function(resposta) { return resposta.text(); })
        .then(function(html) {
            document.getElementById('conteudo').innerHTML = html;
            ativarFormulario();
            if (pagina === 'projetos') {
                gerarCardsProjetos();
                exibirTotalCadastros();
            }
        })
        .catch(function(erro) {
            document.getElementById('conteudo').innerHTML = '<p>Erro ao carregar a página.</p>';
        });
}