import Router from 'koa-router';

import teste from './v1/teste.route';
import user from './v1/user.route'; 

// api routes
const routes = new Router({ prefix: '/api' });

// v1 routes
routes.use('/v1', user.routes(), user.allowedMethods());
routes.use('/v1', teste.routes(), user.allowedMethods());

export default routes;