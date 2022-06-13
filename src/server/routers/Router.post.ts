import '../util/module-alias';

export class RouterPost {
    
    public loginLojas() :string{
        return '/loginlojas'
    }
    public loginClientes() :string{
        return '/loginclientes'
    }
    public setPedidos() :string{
        return '/setpedidos'
    }
    public getPedidos() :string{
        return '/getpedidos'
    }
    public delPedidos() :string{
        return '/delpedidos'
    }
    public setCache() :string{
        return '/setcache'
    }
    public getCache() :string{
        return '/getcache'
    }
    public delCache() :string{
        return '/delcache'
    }
    public getPessoa() :string{
        return '/getpessoa'
    }
    public setPessoa() :string{
        return '/setpessoa'
    }
    public delPessoa() :string{
        return '/delpessoa'
    }
}