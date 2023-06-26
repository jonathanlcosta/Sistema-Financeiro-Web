export class UsuarioListagemRequest{
    Nome: string;
    Email: string;
    CPF: string;

    public constructor(params: Partial<UsuarioListagemRequest>)
    {
        this.Nome = params.Nome || '';
        this.Email = params.Email || '';
        this.CPF = params.CPF || '';
    }
    
    
}