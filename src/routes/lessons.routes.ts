import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Lesson } from '../database/entities/Lesson';

const routes = Router();

routes.post('/', async (request, response) => {
    const lessonRepository = getRepository(Lesson);

    const lesson = lessonRepository.create(request.body);
    await lessonRepository.save(lesson);

    return response.status(201).json(lesson);
});

routes.get('/', async (request, response) => {
    const lessonRepository = getRepository(Lesson);
    const lessons = await lessonRepository.find({ relations: ['classe'] });
    return response.json(lessons);
});

export default routes;
