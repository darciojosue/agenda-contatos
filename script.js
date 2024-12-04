const form = document.getElementById('form-contact');
const nomes = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha() {
    const inputNomeUsuario = document.getElementById('name');
    const inputTelefoneUsuario = document.getElementById('phone');

    if (nomes.includes(inputNomeUsuario.value)){
        alert(`O usuário: ${inputNomeUsuario.value} já foi inserido`);
    } else {
        nomes.push(inputNomeUsuario.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeUsuario.value}</td>`;
        linha += `<td>${inputTelefoneUsuario.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeUsuario.value = '';
    inputTelefoneUsuario.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}