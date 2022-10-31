import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { JwtWsAuthGuard } from 'src/service/infra/jwt-ws-auth.guard';
import { DeleteServiceService } from 'src/service/usecases/delete-service.usecase';

@Controller('service')
@UseGuards(JwtWsAuthGuard)
export class DeleteServiceController {
  constructor(private deleteServiceService: DeleteServiceService) {}

  @Delete('delete/:id')
  updateService(@Param('id') id: string): Promise<void> {
    return this.deleteServiceService.deleteService(id);
  }
}
