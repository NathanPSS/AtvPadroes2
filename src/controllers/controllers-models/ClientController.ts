

import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response} from 'express'
import { Cliente } from '../../model/Cliente';

const url = 'client'

@Controller(url)
export class ClientController {
    private cliente :Cliente

    @Post('add')
    private addClienteBD(cliente :Cliente){

    }
}