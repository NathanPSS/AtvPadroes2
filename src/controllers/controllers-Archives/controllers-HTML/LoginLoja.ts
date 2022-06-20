
import { IControllerArchives } from "../IControllerArchives";
import { Controller, Get } from '@overnightjs/core';
import { Request, Response} from 'express'

const url = 'loginloja'

@Controller(url)
export class LoginLojaControllerHTML implements IControllerArchives {
   
    @Get('html')
    public archiveReturn(req :Request, res :Response) :void{
      return res.sendFile('/home/nathan/AtividadePradoes2INDV/src/view/html/loginLoja.html')
    }
}