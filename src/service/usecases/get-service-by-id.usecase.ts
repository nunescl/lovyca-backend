import { Injectable } from '@nestjs/common';
import { ServiceEntity } from '../entities/service.entity';
import { ServiceRepository } from '../infra/service.repository';

@Injectable()
export class GetServiceByIdService {
  constructor(private serviceRepository: ServiceRepository) {}

  async getServiceById(id: string): Promise<ServiceEntity> {
    return await this.serviceRepository.getServiceById(id);
  }
}
