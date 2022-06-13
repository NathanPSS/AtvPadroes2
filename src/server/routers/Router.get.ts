import '../util/module-alias';


export class RouterGet {
 
   constructor (){
   }

 public homePage() :string{
    return '/'
 }
 public cadastroHTML() :string{
    return '/cadastro'
 }
 public loginHTML() :string{
    return '/login'
 }
 public lojasHTML() :string{
    return '/lojas'
 }
 public lojaLoginHTML() :string{
    return '/loginloja'
 }
 public estoque() :string{
    return '/estoque'
 }
 public cssCarrosel() :string{
    return '/csscarrossel'
 }
 public arquivosClient() :string{
   return '/arquivosclient'
 }
 public pedidosHTML() :string{
    return '/pedidos'
 }
}