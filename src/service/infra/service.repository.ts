import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ServiceRepository {
  private serviceRepo: Repository<ServiceRepository>;

  constructor(private dataSource: DataSource) {
    this.serviceRepo = dataSource.getRepository(ServiceRepository);
  }
}
