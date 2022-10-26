import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ServiceEntity } from '../entities/service.entity';
import { SaveService, SaveUpdatedService } from './service.repository.types';

@Injectable()
export class ServiceRepository {
  private serviceRepo: Repository<ServiceEntity>;

  constructor(private dataSource: DataSource) {
    this.serviceRepo = dataSource.getRepository(ServiceEntity);
  }

  public async createService(saveService: SaveService): Promise<ServiceEntity> {
    const service = this.serviceRepo.save({
      ...saveService,
      user: { id: saveService.user_id },
    });

    return service;
  }

  public async getServices(): Promise<ServiceEntity[]> {
    const query = this.serviceRepo.createQueryBuilder();

    try {
      const services: ServiceEntity[] = await query.getMany();
      return services;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  public async getServiceById(id: string): Promise<ServiceEntity> {
    const matches = await this.serviceRepo.findOneBy({ id });
    return matches;
  }

  public async updateService(
    id: string,
    saveUpdatedService: SaveUpdatedService,
  ): Promise<ServiceEntity> {
    this.serviceRepo
      .createQueryBuilder('updateService')
      .update(saveUpdatedService)
      .where({ id })
      .execute();
    const matches = await this.getServiceById(id);
    return matches;
  }
}
