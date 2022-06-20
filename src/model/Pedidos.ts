import { Cliente } from './Cliente';
import { Produto } from './Produto';

export class Pedidos {
    private cliente :Cliente
    private produto :Array<Produto>

    constructor(cliente :Cliente, produto :Array<Produto>){
        this.cliente = cliente
        this.produto = produto
    }
}