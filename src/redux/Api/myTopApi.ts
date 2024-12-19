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
      

        
    }),
})


export const { useMytopAddMutation } = userApi