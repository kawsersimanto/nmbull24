



import { MembershipPlanType } from "@/schema/MembershipPlanSchema";
import baseApi from "./baseApi";

const memberShipApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allMembershipPlan: builder.query({
      query: () => "/payment/prices",
      providesTags: ["plan"],
    }),

    careateNewPlan: builder.mutation<MembershipPlanType, MembershipPlanType>({
      query: (plan) => ({
        url: `/users/member/${plan.id}`,
        method: "POST",
        body: plan,
      }),
      invalidatesTags: ["plan"],
    }),
  }),
});

export const { useAllMembershipPlanQuery, useCareateNewPlanMutation } = memberShipApi;
