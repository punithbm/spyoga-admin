import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Batch {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    title!: string;

  @Column()
    time!: string;

  @Column()
    days_in_week!: string;

  @Column()
    total_classes_a_month!: number;
}
