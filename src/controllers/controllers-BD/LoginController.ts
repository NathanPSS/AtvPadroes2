
import { Controller, Post } from '@overnightjs/core';
import { Request, Response} from 'express'
import axios from 'axios'

const url = 'client'

@Controller(url)
export class LoginController {
    constructor(){}
    @Post('log_in')
    public async log_in(req :Request, res :Response) {
        const {cpf} = req.body
        const query :string = `SELECT * FROM cliente WHERE cpf='${cpf}'`
        await axios.post(
            'http://localhost:3000/postgree/query',{
             query: query
            }
        )
    }
}