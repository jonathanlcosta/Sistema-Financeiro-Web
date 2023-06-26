import { SistemaResponse } from "src/app/sistemas/models/Sistema.response";

export class UsuarioResponse{
    Nome: string;
    Email: string;
    CPF: string;
    Administrador: boolean;
    SistemaAtual: boolean;
    SistemaFinanceiro: SistemaResponse

    public constructor(params: Partial<UsuarioResponse>)
    {
        this.Nome = params.Nome 
        this.Email = params.Email 
        this.CPF = params.CPF;
        this.Administrador = params.Administrador;
        this.SistemaAtual = params.SistemaAtual;
        this.SistemaFinanceiro = params.SistemaFinanceiro;
    }
}