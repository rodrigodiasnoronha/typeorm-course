import { Router } from 'express';
import classesRoutes from './classes.routes';
import studentsRoutes from './students.routes';
import lessonsRoutes from './lessons.routes';

const routes = Router();

routes.use('/classes', classesRoutes);
routes.use('/students', studentsRoutes);
routes.use('/lessons', lessonsRoutes);

export default routes;
