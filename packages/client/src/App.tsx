import { useQuery } from "@apollo/client";
import React from "react";
import { Header } from "./components/Header";
import { GET_ALL_POKEMONS_QUERY } from "./apollo/queries";

export const App = () => {
  const { data, loading, error } = useQuery(GET_ALL_POKEMONS_QUERY);

  console.log({
    data,
    loading,
    error,
  });

  return (
    <div>
      <Header />
    </div>
  );
};
