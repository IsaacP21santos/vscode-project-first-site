export function salvarCadastro() {
    const novoCadastro = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
        cep: document.getElementById('cep').value,
        data: dayjs().format('DD/MM/YYYY [às] HH:mm')
    };

    const cadastrosExistentes = localStorage.getItem('cadastros');
    const listaCadastros = cadastrosExistentes ? JSON.parse(cadastrosExistentes) : [];
    listaCadastros.push(novoCadastro);
    localStorage.setItem('cadastros', JSON.stringify(listaCadastros));
}

export function exibirTotalCadastros() {
    const cadastrosExistentes = localStorage.getItem('cadastros');
    const lista = cadastrosExistentes ? JSON.parse(cadastrosExistentes) : [];

    const elemento = document.getElementById('totalCadastros');
    if (elemento) {
        elemento.textContent = lista.length + ' pessoa(s) já se cadastraram até agora.';
    }
}