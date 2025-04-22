    // =============================================
    // INSERIR USUÁRIO DE TESTE (APENAS PARA DESENVOLVIMENTO)
    // =============================================
    if (!localStorage.getItem('usuarios') || JSON.parse(localStorage.getItem('usuarios')).length === 0) {
        const usuariosTeste = [           
            {
                nome: "PUC Lourdes",
                email: "puclourdes@puc.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "30140071",
                    logradouro: "Rua da Bahia",
                    numero: "2020",
                    complemento: "",
                    bairro: "Lourdes",
                    cidade: "Belo Horizonte",
                    uf: "MG"
                }
            },
            {
                nome: "Mineirão",
                email: "mineirao@mineirao.com.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "31275000",
                    logradouro: "Avenida Antônio Abrahão Caram",
                    numero: "1001",
                    complemento: "",
                    bairro: "São José",
                    cidade: "Belo Horizonte",
                    uf: "MG"
                }
            },
            {
                nome: "PUC Betim",
                email: "pucbetim@puc.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "32604115",
                    logradouro: "Rua do Rosário",
                    numero: "1081",
                    complemento: "",
                    bairro: "Angola",
                    cidade: "Betim",
                    uf: "MG"
                }
            },
            {
                nome: "Puc Barreiro",
                email: "pucbarreiro@puc.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "30640070",
                    logradouro: "Avenida Afonso Vaz de Melo",
                    numero: "1200",
                    complemento: "",
                    bairro: "Barreiro",
                    cidade: "Belo Horizonte",
                    uf: "MG"
                }
            }
        ];
    
        localStorage.setItem('usuarios', JSON.stringify(usuariosTeste));
        console.log('Usuários de teste criados com sucesso!');
    }
    
    // Selecionar o usuário logado, pelo número do index no final do código depois de
    // getItem('usuarios')) | dentro das colchetes [numero do index]
    sessionStorage.setItem('usuarioLogado', JSON.stringify(JSON.parse(localStorage.getItem('usuarios'))[2]));