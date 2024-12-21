import { talkingPointsData } from "@/constants/talkingPointsData";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        talkingPoints: build.mutation({
            query: (data: any) => {
                return {
                    url: "/takingPoint/create",
                    method: "POST",
                    body: data
                }
            },
            
           
        }),
        getTalkingPoints: build.query({
            query: () => {
                return {
                    url: "/takingPoint/get-my-taking",
                    method: "GET",
              
                }
            },
            
           
        }),
      

        
    }),
})


export const { useTalkingPointsMutation,useGetTalkingPointsQuery } = userApi