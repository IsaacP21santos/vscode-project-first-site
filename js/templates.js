const projetosData = [
    { titulo: "Cozinha Comunitária", descricao: "Preparamos refeições diárias para moradores de rua na região central de São Paulo.", badge: "Ativo" },
    { titulo: "Doação de Alimentos", descricao: "Recebemos doações de alimentos não perecíveis de mercados e famílias parceiras.", badge: "Ativo" },
    { titulo: "Capacitação de Voluntários", descricao: "Oferecemos treinamento básico de manipulação de alimentos para novos voluntários.", badge: "Vagas Abertas" }
];

export function gerarCardsProjetos() {
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