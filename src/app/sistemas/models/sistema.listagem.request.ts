export class SistemaListagemRequest{
    Nome: string;

    public constructor(params: Partial<SistemaListagemRequest>)
    {
        this.Nome = params.Nome || '';
    }
}