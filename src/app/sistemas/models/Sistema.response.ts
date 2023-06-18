export class SistemaResponse{
    Id: number;
    Nome: string;
    Mes: string;
    Ano: string;


    public constructor(params: Partial<SistemaResponse>)
    {
        this.Id = params.Id;
        this.Nome = params.Nome;
        this.Mes = params.Mes;
        this.Ano = params.Ano;
    }
}