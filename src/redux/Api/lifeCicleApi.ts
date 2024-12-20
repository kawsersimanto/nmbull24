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
        lifStyleMy: build.query({
            query: () => {
                return {
                    url: "/lifestyle/my-lifestyle",
                    method: "GET",
            
                }
            },
            
           
        }),
      

        
    }),
})


export const { useLifeCicleAddMutation,useLifStyleMyQuery } = userApi