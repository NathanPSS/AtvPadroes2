import 'dotenv/config'
import Redis from 'ioredis'
import { Request, Response} from 'express'
import { BodyRedis } from './BodyRedis'



export class ClientRedis {
 private redis = new Redis({ port: 6379, host: '172.19.0.2' })
 private bodyredis = new BodyRedis()

 private async setCache(req :Request, res :Response){
    const result = await this.redis.set(`${this.bodyredis.bodyKey(req)}`,`${this.bodyredis.bodyValue(req)}`,'EX',7200)
    res.send(result)
 }

 private async getCache(req :Request, res :Response){
  const result = await this.redis.get(`${this.bodyredis.bodyKey(req)}`)
  res.send(result)
}

 private async rmCache(req :Request, res :Response){
  const result = await this.redis.del(`${this.bodyredis.bodyKey(req)}`)
  res.send('Deletado')
}
}
