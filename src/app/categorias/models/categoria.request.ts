export class CategoriaRequest{
    Nome: string;
    IdSistemaFinanceiro?: number;

    public constructor(params: Partial<CategoriaRequest>)
    {
        this.Nome = params.Nome;
        this.IdSistemaFinanceiro = params.IdSistemaFinanceiro;
    }
}