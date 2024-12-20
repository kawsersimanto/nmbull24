import baseApi from "./baseApi";

const membershipApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    membership: build.query({
      query: () => {
        return {
          url: "/payment/prices",
          method: "GET",
        };
      },
    }),
    membershipById: build.query({
      query: (id) => { // id parameter here
        return {
          url: `payment/prices/${id}`, // Use the id to dynamically form the URL
          method: "GET",
        };
      },
    }),
    subscriptionPlan: build.mutation({
        query: (data) => { // id parameter here
          return {
            url: `/payment/buy-subscription`, // Use the id to dynamically form the URL
            method: "POST",
            body:data,
          };
        },
      }),
  }),
});

// Export hooks
export const { useMembershipQuery, useMembershipByIdQuery,useSubscriptionPlanMutation } = membershipApi;
