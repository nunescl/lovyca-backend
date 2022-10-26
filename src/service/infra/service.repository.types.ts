import { ServiceCategoryEnum } from '../entities/service-category.enum';
import { ServiceStatusEnum } from '../entities/service-status.enum';

export type SaveService = {
  name: string;
  category: ServiceCategoryEnum;
  warranty: number;
  status: ServiceStatusEnum;
  price: number;
  user_id: string;
};
