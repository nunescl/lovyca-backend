import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceEntity } from './service.entity';
import { UserRoleEnum } from './user-role.enum';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column()
  roles: UserRoleEnum;

  @OneToMany(() => ServiceEntity, (service) => service.name)
  services: ServiceEntity[];
}
