import Router from 'koa-router';

import user from './v1/user.route'; 

// api routes
const routes = new Router({ prefix: '/api' });

// v1 routes
routes.use('/v1', user.routes(), user.allowedMethods());

export default routes;