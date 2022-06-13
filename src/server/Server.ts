import '../util/module-alias';
import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser';
import { RouterGet } from './routers/Router.get';
import { RouterPost } from './routers/Router.post';


export class SetupServer extends Server {


    constructor(private port = 3000){
      super();
    }
    public inicia(): void{
        this.setupExpress()
    }
    private setupExpress (): void{
      this.app.use(bodyParser.json())
      this.app.listen(this.port,() =>{
        console.log('Servidor On')
      })
    }
}

