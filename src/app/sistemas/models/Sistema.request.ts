export class SistemaRequest{
    Nome: string;

    public constructor(params: Partial<SistemaRequest>)
    {
        this.Nome = params.Nome;
    }
}