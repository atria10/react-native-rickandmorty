import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";
import Characters from "../components/Characters";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useFavorites } from "../hooks/useFavorites";
import { useGetCharactersQuery } from "../redux/slices/rickAndMortySlice";

type Props = {};

const FavoritesScreen = (props: Props) => {
  const { data, error, isLoading } = useGetCharactersQuery();
  const { getFavorites, isFavorite } = useFavorites();
  if (isLoading) {
    return <Loading text={"Characters"} />;
  }

  if (error) {
    return <Error error={error as FetchBaseQueryError} />;
  }

  return <Characters isFavorite={isFavorite} characters={getFavorites(data)} />;
};

export default FavoritesScreen;
