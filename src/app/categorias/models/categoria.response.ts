import { SistemaResponse } from "src/app/sistemas/models/Sistema.response";

export class CategoriaResponse{
    Nome: string;
    SistemaFinanceiro: SistemaResponse;

    public constructor(params: Partial<CategoriaResponse>)
    {
        this.Nome = params.Nome;
        this.SistemaFinanceiro = params.SistemaFinanceiro;
    }
}