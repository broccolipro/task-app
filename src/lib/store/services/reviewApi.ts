import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Review} from "@/shared/types/Review";

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://f009back.vercel.app/review' ,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getReviews: builder.query<Review[], string>({
            query: () => `all`,
        }),
        addReview: builder.mutation<Review, any>({
            query: (newReview) => ({
                url: '/create',
                method: 'POST',
                body: newReview
            })
        })
    }),
})

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi
