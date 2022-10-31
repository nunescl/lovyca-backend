import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ServiceEntity } from 'src/service/entities/service.entity';
import { JwtWsAuthGuard } from 'src/service/infra/jwt-ws-auth.guard';
import { CreateServiceService } from 'src/service/usecases/create-service.usecase';
import { CreateServiceDto } from '../dtos/create-service.dto';

@Controller('service')
@UseGuards(JwtWsAuthGuard)
export class CreateServiceController {
  constructor(private createServiceService: CreateServiceService) {}

  @Post('/create')
  createService(
    @Body() createServiceDto: CreateServiceDto,
  ): Promise<ServiceEntity> {
    return this.createServiceService.createService(createServiceDto);
  }
}
