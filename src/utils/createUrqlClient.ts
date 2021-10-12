import { dedupExchange, fetchExchange, ssrExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { isServer } from "./isServer";

// import { betterUpdateQuery } from "./betterUpdateQuery";

// const ssr = ssrExchange({
//   isClient: !isServer,
//   initialState: !isServer ? window.__URQL_DATA__ : undefined,
// });

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
