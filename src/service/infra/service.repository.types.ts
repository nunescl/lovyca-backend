import { ServiceCategoryEnum } from '../entities/service-category.enum';
import { ServiceStatusEnum } from '../entities/service-status.enum';

export type SaveService = {
  name: string;
  category: ServiceCategoryEnum;
  warranty: number;
  status?: ServiceStatusEnum;
  price: number;
  description: string;
  user_id?: string;
};

export type SaveUpdatedService = {
  name?: string;
  category?: ServiceCategoryEnum;
  warranty?: number;
  status?: ServiceStatusEnum;
  price?: number;
  description?: string;
  user_id?: string;
};
