import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { globalStyles } from "./theme/globalStyles";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: ["q", "type"],
            merge(existing, incoming) {
              if (existing?.edges) {
                return {
                  edges: [...existing.edges, ...incoming.edges],
                  pageInfo: {
                    ...existing.pageInfo,
                    ...incoming.pageInfo,
                  },
                  __typename: "PokemonsConnection",
                };
              }

              if (incoming?.edges) {
                return {
                  edges: incoming.edges,
                  pageInfo: incoming.pageInfo,
                  __typename: "PokemonsConnection",
                };
              }

              return {};
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <App />
      <div id="dialog-portal" />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
