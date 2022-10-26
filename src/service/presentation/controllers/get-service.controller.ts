import { Controller, Get } from '@nestjs/common';
import { ServiceEntity } from 'src/service/entities/service.entity';
import { GetServiceService } from 'src/service/usecases/get-service.usecase';

@Controller('service')
export class GetServiceController {
  constructor(private getServiceService: GetServiceService) {}

  @Get()
  createService(): Promise<ServiceEntity[]> {
    return this.getServiceService.getServices();
  }
}
