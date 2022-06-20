
import { IControllerArchives } from "../IControllerArchives";
import { Controller, Get } from '@overnightjs/core';
import { Request, Response} from 'express'

const url = 'cadastro'

@Controller(url)
export class CadastroControllerHTML implements IControllerArchives {
   
    @Get('html')
    public archiveReturn(req :Request, res :Response) :void{
      return res.sendFile('/home/nathan/AtividadePradoes2INDV/src/view/html/cadastro.html')
    }
}
