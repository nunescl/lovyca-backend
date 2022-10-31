import { Controller, Get, UseGuards } from '@nestjs/common';
import { ServiceEntity } from 'src/service/entities/service.entity';
import { JwtWsAuthGuard } from 'src/service/infra/jwt-ws-auth.guard';
import { GetServiceService } from 'src/service/usecases/get-service.usecase';

@Controller('service')
@UseGuards(JwtWsAuthGuard)
export class GetServiceController {
  constructor(private getServiceService: GetServiceService) {}

  @Get()
  createService(): Promise<ServiceEntity[]> {
    return this.getServiceService.getServices();
  }
}
