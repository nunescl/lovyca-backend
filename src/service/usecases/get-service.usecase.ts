import { Injectable } from '@nestjs/common';
import { ServiceEntity } from '../entities/service.entity';
import { ServiceRepository } from '../infra/service.repository';

@Injectable()
export class GetServiceService {
  constructor(private serviceRepository: ServiceRepository) {}

  async getServices(): Promise<ServiceEntity[]> {
    return this.serviceRepository.getServices();
  }
}
