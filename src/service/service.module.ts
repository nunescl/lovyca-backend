import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRepository } from './infra/service.repository';
import { CreateServiceController } from './presentation/controllers/create-service.controller';
import { CreateServiceService } from './usecases/create-service.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository])],
  controllers: [CreateServiceController],
  providers: [CreateServiceService, ServiceRepository],
})
export class ServicesModule {}
