import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data: any) => {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body: data
                }
            },
            
            invalidatesTags: ["logIn"]
        }),
        registerUser: build.mutation({
            query: (data: any) => {
                return {
                    url: "/users/register",
                    method: "POST",
                    body: data
                }
            },
            
        }),

        forgotUser: build.mutation({
            query: (data: any) => {
                return {
                    url: "/auth/forgot-password",
                    method: "POST",
                    body: data
                }
            },
            
        }),
        otpUser: build.mutation({
            query: (data: any) => {
                return {
                    url: "/auth/verify-forgot-password",
                    method: "POST",
                    body: data
                }
            },
            
        }),
        resetPass: build.mutation({
            query: (data: any) => {
                return {
                    url: "/auth/reset-password",
                    method: "POST",
                    body: data
                }
            },
            
        }),
        updateByUser: build.mutation({
            query: (data: any) => {
                return {
                    url: "/users/profile",
                    method: "PUT",
                    body: data
                }
            },
            
        })
    }),
})


export const { useLoginUserMutation,useRegisterUserMutation,useForgotUserMutation,useOtpUserMutation,useResetPassMutation,useUpdateByUserMutation } = userApi