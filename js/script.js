function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push({ nome, sobrenome, peso, altura });
        atualizaTabela();
    }

    function atualizaTabela() {
        if (pessoas.length === 1) {
            resultado.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Peso (kg)</th>
                            <th>Altura (m)</th>
                        </tr>
                    </thead>
                    <tbody id="tabela-corpo">
                    </tbody>
                </table>
            `;
            resultado.style.display = 'block';
        }

        const tabelaCorpo = document.querySelector('#tabela-corpo');
        tabelaCorpo.innerHTML = '';

        pessoas.forEach(pessoa => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${pessoa.nome}</td>
                <td>${pessoa.sobrenome}</td>
                <td>${pessoa.peso}</td>
                <td>${pessoa.altura}</td>
            `;
            tabelaCorpo.appendChild(tr);
        });
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
