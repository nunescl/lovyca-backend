import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ServiceEntity } from '../entities/service.entity';
import { SaveService } from './service.repository.types';

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
}
