import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtWsAuthGuard } from 'src/service/infra/jwt-ws-auth.guard';
import { UpdateServiceService } from 'src/service/usecases/update-service.usecase';
import { UpdateServiceDto } from '../dtos/update-service.dto';

@Controller('service')
@UseGuards(JwtWsAuthGuard)
export class UpdateServiceController {
  constructor(private updateServiceService: UpdateServiceService) {}

  @Patch('update/:id')
  updateService(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.updateServiceService.updateService(id, updateServiceDto);
  }
}
