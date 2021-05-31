import { dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";

// import { betterUpdateQuery } from "./betterUpdateQuery";

export const createUrqlClient = (ssrExchange: any) => ({
  url: "https://graphql.anilist.co",
  exchanges: [
    dedupExchange,
    cacheExchange({
      keys: {
        MediaTitle: () => null,
        MediaCoverImage: () => null,
        MediaTag: () => null,
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});
