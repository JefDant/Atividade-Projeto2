const form = document.getElementById('form-lista');
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('telefone');

    if(atividades.includes(inputNome.value)) {
        alert(`O número de: ${inputNome.value} já foi inserido`);
    }else {
        atividades.push(inputNome.value);
        notas.push((inputNumero.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    
        inputNome.value = '';
        inputNumero.value = '';
    }

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

