export class PaginacaoResponse<T> {
    Total: number; // total de itens cadastrados
    Registros: Array<T>; // itens da página atual

    constructor(params: Partial<PaginacaoResponse<T>>) {
        this.Total = params.Total || 0;
        this.Registros = params.Registros || [];
    }
}
