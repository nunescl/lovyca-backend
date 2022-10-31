import { Injectable } from '@nestjs/common';
import { ServiceEntity } from '../entities/service.entity';
import { ServiceRepository } from '../infra/service.repository';
import { CreateServiceDto } from '../presentation/dtos/create-service.dto';

@Injectable()
export class CreateServiceService {
  constructor(private serviceRepository: ServiceRepository) {}

  async createService(
    createServiceDto: CreateServiceDto,
  ): Promise<ServiceEntity> {
    try {
      return await this.serviceRepository.createService(createServiceDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
