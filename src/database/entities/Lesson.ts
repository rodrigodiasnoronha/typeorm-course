import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToOne,
    ManyToOne,
} from 'typeorm';
import { Content } from './Content';
import { Class } from './Class';

@Entity('lessons')
export class Lesson {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    description: string;

    @OneToOne(type => Content, lesson => Lesson)
    content: Content;

    @ManyToOne(type => Class, lessons => Lesson)
    classe: Class;

    @CreateDateColumn()
    created_at: Date;
}
