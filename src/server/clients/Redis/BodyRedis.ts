import { Request } from 'express'

export class BodyRedis {
    constructor(){}
    public bodyKey(req :Request){
        return req.body.key
    }
    
    public bodyValue(req :Request){
        return req.body.value
    }
}