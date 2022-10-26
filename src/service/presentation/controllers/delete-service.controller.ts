import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteServiceService } from 'src/service/usecases/delete-service.usecase';

@Controller('service')
export class DeleteServiceController {
  constructor(private deleteServiceService: DeleteServiceService) {}

  @Delete('delete/:id')
  updateService(@Param('id') id: string): Promise<void> {
    return this.deleteServiceService.deleteService(id);
  }
}
