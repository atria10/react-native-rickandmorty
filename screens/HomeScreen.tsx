import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";
import Characters from "../components/Characters";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useGetCharactersQuery } from "../redux/slices/rickAndMortySlice";
import { useFavorites } from "../hooks/useFavorites";

type Props = {};

const HomeScreen = (props: Props) => {
  const { data, error, isLoading } = useGetCharactersQuery();
  const { isFavorite } = useFavorites();
  if (isLoading) {
    return <Loading text={"Characters"} />;
  }

  if (error) {
    return <Error error={error as FetchBaseQueryError} />;
  }

  return <Characters characters={data ?? []} isFavorite={isFavorite} />;
};

export default HomeScreen;
