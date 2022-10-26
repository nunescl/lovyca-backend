import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateServiceService } from 'src/service/usecases/update-service.usecase';
import { UpdateServiceDto } from '../dtos/update-service.dto';

@Controller('service')
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
