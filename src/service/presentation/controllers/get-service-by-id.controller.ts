import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ServiceEntity } from 'src/service/entities/service.entity';
import { JwtWsAuthGuard } from 'src/service/infra/jwt-ws-auth.guard';
import { GetServiceByIdService } from 'src/service/usecases/get-service-by-id.usecase';

@Controller('service')
@UseGuards(JwtWsAuthGuard)
export class GetServiceByIdController {
  constructor(private getServiceByIdService: GetServiceByIdService) {}

  @Get('/:id')
  createService(@Param('id') id: string): Promise<ServiceEntity> {
    return this.getServiceByIdService.getServiceById(id);
  }
}
