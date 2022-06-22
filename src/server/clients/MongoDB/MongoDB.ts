import * as mongoDB from "mongodb";
import { BodyMongo } from "./BodyMongo";
import { Request, Response} from 'express'


export class ClientMongoDB {
    private bodyMongo :BodyMongo = new BodyMongo()

    private client() {
     const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb+srv://nathanpss15@gmail.com:736789than@sandbox.jadwj.mongodb.net");
     return client
   }

    public async Collection(req :Request, res :Response) {
        const client = this.client()
        const dbMongo :mongoDB.Db = client.db(this.bodyMongo.bodyDatabase(req))
        const collectionMongo :mongoDB.Collection = dbMongo.collection(this.bodyMongo.bodyColletion(req))
        res.send(collectionMongo)
    }
}