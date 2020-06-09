import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Class } from '../database/entities/Class';
import { ClassRepository } from '../database/repositories/ClassRepository';

const routes = Router();

routes.post('/', async (request, response) => {
    const { duration = 1, name = '' } = request.body;

    const classRepository = getRepository(Class);

    /**
     * USAR O CREATE
     * DEPOIS O SAVE
     *
     * PORQUE? SE NÃO ELE NÃO CRIA O ID DA CLASSE
     */
    try {
        const newClass = classRepository.create({
            duration: Number(duration),
            name,
        });
        await classRepository.save(newClass);

        return response.status(201).json(newClass);
    } catch (err) {
        return response.status(500).json(err);
    }
});

routes.get('/', async (request, response) => {
    const page = Number(request.query.page || 1);
    const limit = Number(request.query.limit || 25);

    const offset = page * limit - limit;

    const classRepository = getRepository(Class);

    const [data, total] = await classRepository.findAndCount({
        skip: offset,
        take: limit,
    });

    return response.json({ data, total, offset, page, limit });
});

routes.get('/name/:name', async (request, response) => {
    const classRepository = getCustomRepository(ClassRepository);

    const classesFound = await classRepository.findByName(
        request.params.name || ''
    );

    return response.json(classesFound);
});

routes.get('/:id', async (request, response) => {
    const { id } = request.params;

    const classRepository = getRepository(Class);

    const classFound = await classRepository.findOne(id);

    if (!classFound) {
        return response
            .status(404)
            .json({ code: 'error/not-found', message: 'Class not found' });
    }

    return response.json(classFound);
});

export default routes;
