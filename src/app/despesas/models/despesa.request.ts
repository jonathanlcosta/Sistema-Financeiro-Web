import { Data } from "popper.js";

export class DespesaRequest{
    Nome: string;
    IdUsuario?: number;
    DataVencimento: Data;
    

    public constructor(params: Partial<DespesaRequest>)
    {
        this.Nome = params.Nome;
        this.IdUsuario = params.IdUsuario;
    }
}