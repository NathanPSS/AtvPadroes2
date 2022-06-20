import { Request, response, Response, Router } from 'express'

export interface IControllerArchives {
 archiveReturn(req :Request, res :Response) :void
/*
ATENÇÃO
 Esta infertace apresenta um atributo privado string contendo a url que vai servir o arquivo então deve ser OBRIGATORIAMENTE definido
no arquivo ts (fora do escopo da classe) das classes que implementão esta interface. Ex const url = '{url que vai servir o arquivo}' 
Explicação 
  O ts não permite a alteração de visibilidade de atributo. Portanto quando definimos uma interface ou classe abstrata pelo padrão elas devem
 ser publicas, mas nas classes que implementam ou extendem não pode ser mudado essa visibilidade. Eu como progamador prefiro que o atributo url fique
 OBRIGATORIAMENTE privado, então a solução encontrada foi dita acima  
 */
}
