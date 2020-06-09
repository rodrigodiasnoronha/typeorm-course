import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from '../entities/Lesson';

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {}
