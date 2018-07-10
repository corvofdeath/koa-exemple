import TesteController from '../../controllers/teste.controller';
import Router from 'koa-router';

const controller = new TesteController();
const router = new Router({ prefix: '/teste' });

router
    .get('/', async (ctx) => { controller.index(ctx) })
    .get('/user', async (ctx) => { controller.user(ctx) });

export default router;
