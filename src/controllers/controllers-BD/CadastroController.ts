
import { Controller, Post } from '@overnightjs/core';
import { Request, Response} from 'express'
import axios from 'axios'

const url = 'client'

@Controller(url)
export class CadastroController {
    constructor(){}
    @Post('sign_up')
    public async sign_upCliente(req :Request, res:Response){
    const {nome,email,cpf,idade} = req.body
    const query :string= `INSERT INTO cliente (nome,email,cpf,idade) VALUES ('${nome}','${email}','${cpf}',${idade})`
    await axios.post(
        'http://localhost:3000/postgree/query',{  
         query: query
        }
    )
    .catch(error =>console.log(error));
    res.redirect('/logincliente/html')
}
}