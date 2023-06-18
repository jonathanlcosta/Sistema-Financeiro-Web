export class PaginacaoRequest<T> {
    Pg: number; // página atual
    Qt: number; // número de itens por página
    TpOrd: "asc" | "desc"; // tipo de ordenação
    CpOrd: keyof T; // campo de referência para ordenação

    constructor(params: Partial<PaginacaoRequest<T>>) {
        this.Pg = params.Pg || 1;
        this.Qt = params.Qt || 10;
        this.CpOrd = params.CpOrd || "Id" as any;
        this.TpOrd = params.TpOrd || "asc";
    }
}
