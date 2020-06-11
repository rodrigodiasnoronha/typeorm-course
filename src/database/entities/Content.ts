import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Lesson } from './Lesson';

@Entity('contents')
export class Content {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    description: string;

    @Column('varchar')
    link_content: string;

    @OneToOne(type => Lesson, content => Content)
    @JoinColumn()
    lesson: Lesson;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
