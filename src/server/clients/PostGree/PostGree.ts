import { Connection } from 'postgresql-client'
import { Request, Response} from 'express'
import { Controller, Post } from '@overnightjs/core';



@Controller('postgree')
export class ClientPostgree {
    constructor(){}
    private client :Connection = new Connection({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'ProjetoFinal2',
    })
    @Post('query')
    public async query(req :Request,res :Response){
        const query = req.body.query
        await this.client.connect()
        const result = await this.client.query(query)
        if (result){
        res.send(result)
        } else {
        res.sendStatus(404)
        }
}
}