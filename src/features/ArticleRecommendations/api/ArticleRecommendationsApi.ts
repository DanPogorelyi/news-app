import { rtkApi } from 'shared/api/rtkApi';

export const { useGetArticleRecommendationsQuery } = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendations: builder.query({
            query: (limit) => ({
                url: '/articles',
                method: 'GET',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});
