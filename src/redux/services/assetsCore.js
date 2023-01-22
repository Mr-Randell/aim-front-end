import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const assetsCoreApi = createApi({ 
    reducerPath: "assetsCoreApi",
    baseQuery: fetchBaseQuery({     
        baseUrl: "https://aim-snb2.onrender.com",
        prepareHeaders: (headers) => {
            headers.set( "Content-Type", "application/json" );
            return headers;
        },
    }),
    endpoints: ( builder ) => ({ 
        // all endpoints go here
        getLogin: builder.query({ query: () => "/login" }),
        getSignUp: builder.query({ query: () => "/signup" }),
        getLogout: builder.query({ query: () => "/logout" }),
        getMe: builder.query({ query: () => "/me" }),
        getAssets: builder.query({ query: () => "/assets" }),
        getEmployees: builder.query({ query: () => "/employees" }),
    }),
});

export const { 
    useGetLoginQuery,
    useGetSignUpQuery,
    useGetLogoutQuery,
    useGetMetQuery,
    useGetAssets,
    useGetEmployees,
} = assetsCoreApi;