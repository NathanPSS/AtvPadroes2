import { AtualizaEstoqueControllerHTML } from './controllers-HTML/AtualizaEstoque';
import { CadastroControllerHTML } from './controllers-HTML/Cadastro';
import { HomeControllerHTML } from './controllers-HTML/Home';
import { LoginClienteControllerHTML } from './controllers-HTML/LoginCLiente';
import { LoginLojaControllerHTML } from './controllers-HTML/LoginLoja';
import { LojasControllerHTML } from './controllers-HTML/Lojas';
import { PedidosControllerHTML } from './controllers-HTML/Pedidos';
import { PesquisaLojaControllerHTML } from './controllers-HTML/PesquisaLoja';
import { CadastroPessoaControllerJS } from './controllers-JS/Cadastro';



export class AllControllers {
    public allControllers() :Array<object>{
        return [
            new AtualizaEstoqueControllerHTML(),
            new CadastroControllerHTML(),
            new HomeControllerHTML(),
            new LoginClienteControllerHTML(),
            new LoginLojaControllerHTML(),
            new LojasControllerHTML(),
            new PedidosControllerHTML(),
            new PesquisaLojaControllerHTML(),
            new CadastroPessoaControllerJS(),
        ]
    }
}