import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRepository } from './infra/service.repository';
import { CreateServiceController } from './presentation/controllers/create-service.controller';
import { GetServiceController } from './presentation/controllers/get-service.controller';
import { CreateServiceService } from './usecases/create-service.usecase';
import { GetServiceService } from './usecases/get-service.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository])],
  controllers: [CreateServiceController, GetServiceController],
  providers: [CreateServiceService, GetServiceService, ServiceRepository],
})
export class ServicesModule {}
