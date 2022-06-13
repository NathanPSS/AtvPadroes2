export class Cliente {
    private  nome: string;
    private  idade: number;
    private  email: string;
    private  cpf: string;
  
      constructor(nome: string,idade: number,email: string, cpf: string){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.cpf = cpf;
      };
  }