import TesteController from '../../controllers/v1/teste.controller';
import Router from 'koa-router';

const controller = new TesteController();
const router = new Router({ prefix: '/teste' });

router
    .get('/', async (ctx) => { controller.index(ctx) })
    .get('/user', async (ctx) => { controller.user(ctx) });

export default router;
