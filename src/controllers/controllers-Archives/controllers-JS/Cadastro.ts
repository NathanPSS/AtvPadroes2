
import { IControllerArchives } from "../IControllerArchives";
import { Controller, Get } from '@overnightjs/core';
import { Request, Response} from 'express'

const url = 'cadastropessoa'

@Controller(url)
export class CadastroPessoaControllerJS implements IControllerArchives {
   
    @Get('js')
    public archiveReturn(req :Request, res :Response) :void{
      return res.sendFile('/home/nathan/AtividadePradoes2INDV/src/client/cadastro.js')
    }
}