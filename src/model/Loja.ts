export class Loja {
    private id: string;
    private nome: string;
    private localizacao: string;

    constructor(id :string,nome :string, localizacao:string){
        this.id=id
        this.localizacao=localizacao
        this.nome = nome
    }
}