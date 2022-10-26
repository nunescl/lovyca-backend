import { Controller, Get, Param } from '@nestjs/common';
import { ServiceEntity } from 'src/service/entities/service.entity';
import { GetServiceByIdService } from 'src/service/usecases/get-service-by-id.usecase';

@Controller('service')
export class GetServiceByIdController {
  constructor(private getServiceByIdService: GetServiceByIdService) {}

  @Get('/:id')
  createService(@Param('id') id: string): Promise<ServiceEntity> {
    return this.getServiceByIdService.getServiceById(id);
  }
}
