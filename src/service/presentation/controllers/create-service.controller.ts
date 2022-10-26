import { Body, Controller, Post } from '@nestjs/common';
import { ServiceEntity } from 'src/service/entities/service.entity';
import { CreateServiceService } from 'src/service/usecases/create-service.usecase';
import { CreateServiceDto } from '../dtos/create-service.dto';

@Controller('service')
export class CreateServiceController {
  constructor(private createServiceService: CreateServiceService) {}

  @Post('/create')
  createService(
    @Body() createServiceDto: CreateServiceDto,
  ): Promise<ServiceEntity> {
    return this.createServiceService.createService(createServiceDto);
  }
}
