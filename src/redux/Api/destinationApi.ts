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
        getDestination: build.query({
            query: () => {
                return {
                    url: "destination/my-destination",
                    method: "GET",
                }
            },
            providesTags:['AllDestination']
            
           
        }),
        getSingleDes: build.query({
            query: (destinationId) => ({
                url: `destination/${destinationId}`,
                method: "GET",
              }),
              
           
        }),
        updateDest: build.mutation({
            query: (updateData) => ({
              url: `destination/${updateData.id}`,  // Use the `id` to define the URL
              method: "PUT",
              body: {
                travelType: updateData.travelType,
                TravelBegins: updateData.TravelBegins,
                destinationCountry: updateData.destinationCountry,
                destinationCity: updateData.destinationCity
              }, // Pass the updated fields but not the `id`
              invalidatesTags:["AllDestination"]
            }),
           
          }),
          
      
      

        
    }),
})


export const { useDestinationAddMutation,useGetDestinationQuery,useGetSingleDesQuery,useUpdateDestMutation } = userApi