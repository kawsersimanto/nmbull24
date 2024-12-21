import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        mytopAdd: build.mutation({
            query: (data: any) => {
                return {
                    url: "/selection/create",
                    method: "POST",
                    body: data
                }
            },
            
           
        }),
        getMyTop: build.query({
            query: () => {
                return {
                    url: "selection/get-my",
                    method: "GET",
                }
            },
            
           
        }),
      

        
    }),
})


export const { useMytopAddMutation,useGetMyTopQuery } = userApi