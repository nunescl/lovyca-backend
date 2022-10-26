import { ServiceCategoryEnum } from 'src/service/entities/service-category.enum';
import { ServiceStatusEnum } from 'src/service/entities/service-status.enum';
import { IsString, IsEnum, IsOptional } from 'class-validator';

export class UpdateServiceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(ServiceCategoryEnum)
  category?: ServiceCategoryEnum;

  @IsOptional()
  warranty?: number;

  @IsOptional()
  @IsEnum(ServiceStatusEnum)
  status?: ServiceStatusEnum;

  @IsOptional()
  price?: number;

  @IsOptional()
  @IsString()
  user_id?: string;
}
