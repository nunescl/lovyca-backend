import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRepository } from './infra/service.repository';
import { CreateServiceController } from './presentation/controllers/create-service.controller';
import { DeleteServiceController } from './presentation/controllers/delete-service.controller';
import { GetServiceByIdController } from './presentation/controllers/get-service-by-id.controller';
import { GetServiceController } from './presentation/controllers/get-service.controller';
import { UpdateServiceController } from './presentation/controllers/update-service.controller';
import { CreateServiceService } from './usecases/create-service.usecase';
import { DeleteServiceService } from './usecases/delete-service.usecase';
import { GetServiceByIdService } from './usecases/get-service-by-id.usecase';
import { GetServiceService } from './usecases/get-service.usecase';
import { UpdateServiceService } from './usecases/update-service.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository])],
  controllers: [
    CreateServiceController,
    GetServiceController,
    GetServiceByIdController,
    UpdateServiceController,
    DeleteServiceController,
  ],
  providers: [
    CreateServiceService,
    GetServiceService,
    GetServiceByIdService,
    UpdateServiceService,
    DeleteServiceService,
    ServiceRepository,
  ],
})
export class ServicesModule {}
