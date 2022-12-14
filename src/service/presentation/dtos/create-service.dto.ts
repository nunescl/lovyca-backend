import { ServiceCategoryEnum } from 'src/service/entities/service-category.enum';
import { ServiceStatusEnum } from 'src/service/entities/service-status.enum';
import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(ServiceCategoryEnum)
  category: ServiceCategoryEnum;

  @IsNotEmpty()
  warranty: number;

  status?: ServiceStatusEnum;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  user_id?: string;
}
