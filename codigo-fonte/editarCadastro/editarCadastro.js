document.addEventListener('DOMContentLoaded', function(){

    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

    
    if (!usuarioLogado || !usuarioLogado.email){
        window.location.href = '../index.html';
        return;
    }
    

    const form = document.getElementById('editarCadastroForm');
    const nomeInput = document.getElementById('editNome');
    const tipoUsuarioSelect = document.getElementById('editTipoUsuario');
    const cepInput = document.getElementById('editCep');
    const numeroInput = document.getElementById('editNumero');
    const complementoInput = document.getElementById('editComplemento');
    const buscarEnderecoBtn = document.getElementById('buscarEndereco');
    const enderecoResultado = document.getElementById('enderecoResultado');
    const cancelarBtn = document.getElementById('cancelarEdicaoBtn');


    nomeInput.value = usuarioLogado.nome || '';
    tipoUsuarioSelect.value = usuarioLogado.tipoUsuario;
    cepInput.value = usuarioLogado.endereco.cep || '';
    numeroInput.value = usuarioLogado.endereco.numero || '';
    complementoInput.value = usuarioLogado.endereco.complemento || '';

    usuarioLogado.endereco = usuarioLogado.endereco || {
       
        cep: '',
        numero: '',
        complemento: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        uf: ''

    }

    if (usuarioLogado.endereco.logradouro) {

        enderecoResultado.innerHTML = `
        
        <p><strong>Endereço atual:</strong> ${usuarioLogado.endereco.logradouro}, ${usuarioLogado.endereco.numero}, ${usuarioLogado.endereco.bairro},
        ${usuarioLogado.endereco.cidade} - ${usuarioLogado.endereco.uf}</p>

        ${usuarioLogado.endereco.complemento ? `<p><strong>Complemento:</strong> ${usuarioLogado.endereco.complemento}</p>` : ''}

        `;

    }


    let enderecoTemp = {

        ...usuarioLogado.endereco,
        complemento: usuarioLogado.endereco.complemento || ''
        
    };


    cepInput.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
        verificarCampos();
    });


    function highlightRequiredFields() {
        const requiredFields = [nomeInput, tipoUsuarioSelect, cepInput, numeroInput];
        requiredFields.forEach(field => {
            field.style.border = field.value.trim() ? '' : '1px solid red';
        })
    }

    
    function verificarCampos() {
        buscarEnderecoBtn.disabled = !(cepInput.value.length === 8 && numeroInput.value.trim() !== "");
        highlightRequiredFields();
    }


    cepInput.addEventListener('input', verificarCampos);
    numeroInput.addEventListener('input', verificarCampos);
    nomeInput.addEventListener('input',highlightRequiredFields);
    tipoUsuarioSelect.addEventListener('change', highlightRequiredFields);


    complementoInput.addEventListener('input', function () {

        if(enderecoTemp) {
            enderecoTemp.complemento = this.value;
            if (enderecoResultado.innerHTML.includes('Novo endereço')) {
                const complementoElement = enderecoResultado.querySelector('p:last-child');
                if (this.value) {
                    if(!complementoElement.innerHTML.includes('Complemento')) {
                        enderecoResultado.innerHTML += `<p><strong>Complemento:</strong> ${this.value}</p>`;
                    } else {
                        complementoElement.innerHTML = `<strong>Complemento:</strong> ${this.value}`;
                    }
                } else if (complementoElement.innerHTML.includes('Complemento')) {
                    complementoElement.remove();
                }
            }
        }

    });

    
    buscarEnderecoBtn.addEventListener('click', async function() {
        const cep = cepInput.value;
        const numero = numeroInput.value;

        try {
            const data = await ViaCepService.buscarEnderecoPorCep(cep);

            enderecoResultado.innerHTML = `
                <p><strong>Novo endereço:</strong> ${data.logradouro || data.localidade}, ${numero}, ${data.bairro}, ${data.localidade} - ${data.uf}</p>
                ${complementoInput.value ? `<p><strong>Complemento:</strong> ${complementoInput.value}</p>` : ''}
            `;

            enderecoTemp = {
                logradouro: data.logradouro || data.localidade,
                bairro: data.bairro,
                cidade: data.localidade,
                uf: data.uf,
                numero: numero,
                complemento: complementoInput.value || '',
                cep: cep
            };
        } catch (error) {
            alert('Erro ao buscar o endereço. Tente novamente.');
            console.error(error);
        }
    });
    

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        highlightRequiredFields();


        const requiredFields = [nomeInput, tipoUsuarioSelect, cepInput, numeroInput];
        const camposVazios = requiredFields.some(field => !field.value.trim());
        
        if (camposVazios) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!enderecoTemp.logradouro) {
            alert('Por favor, busque o endereço antes de salvar.');
            return;
        }


        usuarioLogado.nome = nomeInput.value;
        usuarioLogado.endereco = enderecoTemp;
        usuarioLogado.tipoUsuario = tipoUsuarioSelect.value;

  
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioIndex = usuarios.findIndex(u => u.email === usuarioLogado.email);
        
        if (usuarioIndex !== -1) {
            usuarios[usuarioIndex] = usuarioLogado;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            
            alert('Dados atualizados com sucesso!');
            window.location.href = 'pontosColeta.html';
        } else {
            alert('Erro ao atualizar dados. Usuário não encontrado.');
        }
    });

    cancelarBtn.addEventListener('click', function() {
        window.location.href = '../pontosColeta/pontosColeta.html';
    });
});