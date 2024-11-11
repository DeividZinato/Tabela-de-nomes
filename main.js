document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaTelefone = document.createElement('td');
    
    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;
    
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);
    
    document.getElementById('corpoTabela').appendChild(novaLinha);

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});
