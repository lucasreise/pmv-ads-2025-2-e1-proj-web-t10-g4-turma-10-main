class ViaCepService {
    static async buscarEnderecoPorCep(cep) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }
            
            return data;
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
            throw error;
        }
    }
}