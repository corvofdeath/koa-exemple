import Koa from 'koa';
import bodyParser from 'koa-body';

import api from '../routes/routes';
import routes from '../routes/routes';

class Server {

    constructor() {
        this.app = new Koa();

        // log routes
        // routes.stack.forEach(route => console.log(route.path));

        // midlewares
        this.app.use(bodyParser());
        this.app.use(api.routes());
    }

    async start(port) {
    
        await new Promise(resolve => this.app.listen(port, resolve));

        return this.app;
    }
}

export default new Server();