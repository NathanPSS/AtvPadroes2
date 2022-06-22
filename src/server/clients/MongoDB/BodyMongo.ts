import { Request } from 'express'

export class BodyMongo {
    constructor(){}
    public bodyDatabase(req :Request) {
        return req.body.dbMongo
    }
    public bodyColletion(req :Request) {
        return req.body.collection
    }
}