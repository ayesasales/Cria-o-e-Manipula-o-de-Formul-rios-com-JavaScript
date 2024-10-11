document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : 'Não informado';
    const pais = document.getElementById('pais').value;
    const comentarios = document.getElementById('comentarios').value;

    if (nome && email && senha) {
        document.getElementById('resultado').innerHTML = `
            <h2>Dados Enviados:</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Senha:</strong> ${senha}</p>
            <p><strong>Gênero:</strong> ${genero}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Comentários:</strong> ${comentarios}</p>
        `;
        document.querySelector('h1').innerText = "Formulário Enviado com Sucesso!";
        document.getElementById('meuFormulario').classList.add('success');
    }
});