
import { IControllerArchives } from "../IControllerArchives";
import { Controller, Get } from '@overnightjs/core';
import { Request, Response} from 'express'

const url = 'pedidos'

@Controller(url)
export class PedidosControllerHTML implements IControllerArchives {
   
    @Get('html')
    public archiveReturn(req :Request, res :Response) :void{
      return res.sendFile('/home/nathan/AtividadePradoes2INDV/src/view/html/pedidos.html')
    }
}