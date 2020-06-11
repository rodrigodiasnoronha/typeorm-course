import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Lesson } from './Lesson';

@Entity('classes') // NOME DA TABELA COMO PARÂMETRO
export class Class {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string;

    @Column('int')
    duration: number;

    @OneToMany(type => Lesson, classType => Class)
    lessons: Lesson[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
