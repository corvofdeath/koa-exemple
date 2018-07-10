import UserController from '../../controllers/user.controller';
import Router from 'koa-router';

const controller = new UserController();
const router = new Router({ prefix: '/user' });

router
    .get('/', async (ctx) => { controller.index(ctx) })
    .get('/all', async (ctx) => { controller.all(ctx) });

export default router;
