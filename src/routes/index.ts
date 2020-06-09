import { Router } from 'express';
import classesRoutes from './classes.routes';

const routes = Router();

routes.use('/classes', classesRoutes);

export default routes;
