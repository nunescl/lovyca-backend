import { Injectable } from '@nestjs/common';
import { ServiceEntity } from '../entities/service.entity';
import { ServiceRepository } from '../infra/service.repository';
import { UpdateServiceDto } from '../presentation/dtos/update-service.dto';

@Injectable()
export class UpdateServiceService {
  constructor(private serviceRepository: ServiceRepository) {}

  async updateService(
    id: string,
    updateServiceDto: UpdateServiceDto,
  ): Promise<ServiceEntity> {
    return await this.serviceRepository.updateService(id, updateServiceDto);
  }
}
