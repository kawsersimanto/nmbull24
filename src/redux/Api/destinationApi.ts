import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        destinationAdd: build.mutation({
            query: (data: any) => {
                return {
                    url: "/destination",
                    method: "POST",
                    body: data
                }
            },
            
           
        }),
      

        
    }),
})


export const { useDestinationAddMutation } = userApi