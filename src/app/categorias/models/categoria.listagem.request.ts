export class CategoriaListagemRequest{
    Nome: string;
    IdSistemaFinanceiro?: number;

    public constructor(params: Partial<CategoriaListagemRequest>)
    {
        this.Nome = params.Nome || '';
        this.IdSistemaFinanceiro = params.IdSistemaFinanceiro || null;
    }
}