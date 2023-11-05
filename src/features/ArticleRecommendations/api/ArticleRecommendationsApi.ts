import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

export const { useGetArticleRecommendationsQuery } = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendations: builder.query<Article[], number>({
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
