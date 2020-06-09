import { EntityRepository, Repository } from 'typeorm';
import { Class } from '../entities/Class';

@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {
    public async findByName(name: string) {
        return await this.find({ where: { name } });
    }
}
