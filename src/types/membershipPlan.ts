export type membershipPlan = {
  id: string;
  name: string;
  amount: number;
  list: { title: string }[];
  interval: string;
  priceId:string;
};
