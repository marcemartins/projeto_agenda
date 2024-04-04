document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-agenda');
    var tbody = document.querySelector('table tbody');

    var contatos = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var inputNome = document.getElementById('Nome-completo');
        var inputTel = document.getElementById('Número-telefone');

        var nome = inputNome.value.trim();
        var tel = inputTel.value.trim();

        const telefoneRegex = /^\d{10,12}$/;

        if (!tel.match(telefoneRegex)) {
            alert('Por favor, insira um número de telefone válido com o DDD.');
            return;
        }

        if (nome === '' || tel === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (contatos.some(contato => contato.nome === nome)) {
            alert('Este nome já está na lista de contatos.');
            return;
        }

        if (!(/^\d+$/.test(tel))) {
            alert('Por favor, insira um número de telefone válido.');
            return;
        }

        contatos.push({ nome: nome, tel: tel });

        atualizarTabela();

        inputNome.value = '';
        inputTel.value = '';
    });

    function atualizarTabela() {
        tbody.innerHTML = '';

        contatos.forEach(function(contato) {
            var tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${contato.nome}</td>
                <td>${contato.tel}</td>
                <td><img src="./Images/Cadastrado.jpg" alt="Com Sucesso"/> </td>
            `;
            tbody.appendChild(tr);
        });
    }
});
