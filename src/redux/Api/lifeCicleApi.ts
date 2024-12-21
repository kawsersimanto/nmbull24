import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        lifeCicleAdd: build.mutation({
            query: (data: any) => {
                return {
                    url: "/lifestyle/create",
                    method: "POST",
                    body: data
                }
            },
            
           
        }),
      

        
    }),
})


export const { useLifeCicleAddMutation } = userApi