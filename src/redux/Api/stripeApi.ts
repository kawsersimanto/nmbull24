import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const stripeApi = createApi({
  reducerPath: 'stripeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.stripe.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer pk_test_51QA6IkFGNtvHx4Utors1CsfYp1LbR9PTTt44T7xcMGtlSZgIIONjBnr3EnUzj4Cq81OEwReXoOlc8IUVeq8QzwRw00PQaoaLGa`);
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
      return headers;
    },
  }),
  endpoints: (build) => ({
    createPaymentMethod: build.mutation({
      query: (data: any) => ({
        url: 'payment_methods',
        method: 'POST',
        body: new URLSearchParams(data), // Format data as x-www-form-urlencoded
      }),
    }),
  }),
});

// Export the hook for using this API
export const { useCreatePaymentMethodMutation } = stripeApi;
export default stripeApi;
