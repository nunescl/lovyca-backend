import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from 'src/service/service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'postgres',
      database: 'lovyca-backend',
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    }),
    ServicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
