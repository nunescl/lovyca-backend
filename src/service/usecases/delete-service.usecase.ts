import { Injectable } from '@nestjs/common';
import { ServiceRepository } from '../infra/service.repository';

@Injectable()
export class DeleteServiceService {
  constructor(private serviceRepository: ServiceRepository) {}

  async deleteService(id: string): Promise<void> {
    await this.serviceRepository.deleteService(id);
  }
}
