// Menu hambúrguer
function toggleMenu() {
  document.getElementById('menuPrincipal').classList.toggle('ativo');
}

// Roteamento SPA
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(evento) {
        evento.preventDefault();
        const pagina = this.getAttribute('data-page');
        carregarPagina(pagina);
    });
});

function carregarPagina(pagina) {
    if (pagina === 'home') {
        document.getElementById('conteudo').innerHTML = `
            <section>
                <h2>Quem somos</h2>
                <p>Nós somos uma ONG que nasceu da necessidade de cuidar do próximo, e alimentar os necessitados, unimos a paixão dos voluntários pela cozinha, com a paixão de ajudar o próximo.</p>
            </section>
        `;
        return;
    }

    fetch('html/' + pagina + '.html')
        .then(function(resposta) {
            return resposta.text();
        })
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

// Dados dos projetos (templates dinâmicos)
const projetosData = [
    {
        titulo: "Cozinha Comunitária",
        descricao: "Preparamos refeições diárias para moradores de rua na região central de São Paulo.",
        badge: "Ativo"
    },
    {
        titulo: "Doação de Alimentos",
        descricao: "Recebemos doações de alimentos não perecíveis de mercados e famílias parceiras.",
        badge: "Ativo"
    },
    {
        titulo: "Capacitação de Voluntários",
        descricao: "Oferecemos treinamento básico de manipulação de alimentos para novos voluntários.",
        badge: "Vagas Abertas"
    }
];

function gerarCardsProjetos() {
    const container = document.getElementById('containerProjetos');
    if (!container) return;

    let html = '';
    projetosData.forEach(function(projeto) {
        html += `
            <section>
                <span class="badge badge-sucesso">${projeto.badge}</span>
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
            </section>
        `;
    });
    container.innerHTML = html;
}

// Formulário: validação + envio + salvamento
function ativarFormulario() {
    const form = document.getElementById('formCadastro');
    if (!form) return;

    const campos = form.querySelectorAll('input');

    campos.forEach(function(campo) {
        campo.addEventListener('input', function() {
            validarCampo(campo);
        });
    });

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        let formularioValido = true;
        campos.forEach(function(campo) {
            if (!validarCampo(campo)) {
                formularioValido = false;
            }
        });

        if (formularioValido) {
            salvarCadastro();
            document.getElementById('alertaSucesso').style.display = 'block';
            form.reset();
        }
    });
}

function validarCampo(campo) {
    const mensagemAnterior = campo.parentElement.querySelector('.mensagem-erro');
    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }

    if (campo.value.trim() === '') {
        exibirErro(campo, 'Este campo não pode ficar vazio.');
        return false;
    }

    if (!campo.checkValidity()) {
        exibirErro(campo, 'Formato inválido. Verifique: ' + campo.placeholder);
        return false;
    }

    campo.style.borderColor = '#27ae60';
    return true;
}

function exibirErro(campo, mensagem) {
    campo.style.borderColor = '#c0392b';

    const erro = document.createElement('p');
    erro.className = 'mensagem-erro';
    erro.textContent = mensagem;
    erro.style.color = '#c0392b';
    erro.style.fontSize = 'var(--texto-xs)';
    erro.style.margin = '2px 0 8px 0';

    campo.insertAdjacentElement('afterend', erro);
}

// localStorage: salvar e recuperar cadastros
function salvarCadastro() {
    const novoCadastro = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
        cep: document.getElementById('cep').value,
        data: new Date().toLocaleDateString('pt-BR')
    };

    const cadastrosExistentes = localStorage.getItem('cadastros');
    const listaCadastros = cadastrosExistentes ? JSON.parse(cadastrosExistentes) : [];

    listaCadastros.push(novoCadastro);

    localStorage.setItem('cadastros', JSON.stringify(listaCadastros));
}

function exibirTotalCadastros() {
    const cadastrosExistentes = localStorage.getItem('cadastros');
    const lista = cadastrosExistentes ? JSON.parse(cadastrosExistentes) : [];

    const elemento = document.getElementById('totalCadastros');
    if (elemento) {
        elemento.textContent = lista.length + ' pessoa(s) já se cadastraram até agora.';
    }
}