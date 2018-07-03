import Koa from 'koa';
import bodyParser from 'koa-body';

class Server {

    constructor() {
        this.app = new Koa();

        // midlewares
        this.app.use(bodyParser());
    }

    async start(port) {

        this.app.use(async ctx => {
            ctx.body = 'Hello World';
        });
    
        await new Promise(resolve => this.app.listen(port, resolve));

        return this.app;
    }
}

export default new Server();