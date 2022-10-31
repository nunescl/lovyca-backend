import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ServiceCategoryEnum } from './service-category.enum';
import { ServiceStatusEnum } from './service-status.enum';
import { UserEntity } from './user.entity';

@Entity()
export class ServiceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  name: string;

  @Column()
  category: ServiceCategoryEnum;

  @Column()
  warranty: number;

  @Column()
  status: ServiceStatusEnum;

  @Column()
  price: number;

  @Column()
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user?: UserEntity;
}
