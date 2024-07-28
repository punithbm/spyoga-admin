import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @Column()
    alias!: string;

  @Column()
    mobile!: string;

  @Column()
    join_date!: Date;

  @Column()
    status!: string;

  @Column()
    batch_id!: number;

  @Column()
    age!: number;

  @Column()
    yoga_exp!: string;

  @Column()
    medical_history!: string;

  @Column()
    gender!: string;

  @Column()
    last_date_attended!: Date;

  @Column()
    created_at!: Date;

  @Column()
    remarks!: string;

  @Column({ default: false })
    ignore_attendance!: boolean;
}
