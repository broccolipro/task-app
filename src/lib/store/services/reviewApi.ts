import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Review} from "@/shared/types/Review";

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://f009back.vercel.app/review' }),
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], string>({
            query: () => `all`,
        }),
    }),
})

export const { useGetReviewsQuery } = reviewApi
