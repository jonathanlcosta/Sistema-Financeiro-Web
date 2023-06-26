export class DespesaResponse
{
    Nome: string;
    IdSistemaFinanceiro?: number;

    public constructor(params: Partial<DespesaResponse>)
    {
        this.Nome = params.Nome;
        this.IdSistemaFinanceiro = params.IdSistemaFinanceiro;
    }
}