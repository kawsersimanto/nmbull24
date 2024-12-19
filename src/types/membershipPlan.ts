

export interface membershipPlan {
  id: string;
  amount: string;
  name: string;
  priceId?: string;
  productId?: string;
  list: Array<{
    title: string;
  }>;
  description?: string;
  currency?: string;
  interval?: string;
  active?: boolean;
  intervalCount?: number;
  freeTrailDays?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface PriceResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: membershipPlan;
}
