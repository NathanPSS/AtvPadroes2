
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { RouterGet } from '@src/server/routers/Router.get';

import { Request, Response, Router } from 'express'

const routerGet = new RouterGet()

@Controller(routerGet.arquivosClient())
export class ArchivesJSController {
  private RouterGet: RouterGet = new RouterGet; 

constructor(){
}

  @Get()
  private getJS(req :Request, res:Response){
    this.RouterGet.estoque()
  }
}