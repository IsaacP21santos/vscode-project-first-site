import { salvarCadastro } from './storage.js';

export function ativarFormulario() {
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
    if (mensagemAnterior) mensagemAnterior.remove();

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
    campo.insertAdjacentElement('afterend', erro);
}