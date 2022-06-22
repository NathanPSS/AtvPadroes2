
import { Server } from '@overnightjs/core'
import { AllControllers } from '../controllers/controllers-Archives/AllControllers';
import bodyParser from 'body-parser';


export class SetupServer extends Server {


    constructor(private port = 3000){
      super();
    }
    public inicia(): void{
        this.setupExpress()
    }
    private setupExpress (): void{
      this.app.use(bodyParser.json())
      this.app.use(bodyParser.urlencoded({extended: false}))
      this.setupControllers()
      this.app.listen(this.port,() =>{
        console.log('Servidor On')
      })
    }
    private setupControllers() {
    
      const allControllers = new AllControllers()
      super.addControllers(allControllers.allControllers())
    }
}

