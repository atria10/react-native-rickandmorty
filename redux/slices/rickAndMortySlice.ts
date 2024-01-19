/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CharacterI,
  CharacterResponseI,
  EpisodeI,
  EpisodeResponseI,
  LocationI,
  LocationResponseI,
} from "../../interfaces/rickAndMorty.interface";

// Define a service using a base URL and expected endpoints
export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterI[], void>({
      query: () => `character`,
      transformResponse: (response: CharacterResponseI) => response.results,
      transformErrorResponse: (response) => {
        return {
          status: response.status,
          data: response.data,
        };
      },
    }),
    getLocations: builder.query<LocationI[], void>({
      query: () => `character`,
      transformResponse: (response: LocationResponseI) => response.results,
      transformErrorResponse: (response) => {
        return {
          status: response.status,
          data: response.data,
        };
      },
    }),
    getEpisodes: builder.query<EpisodeI[], void>({
      query: () => `character`,
      transformResponse: (response: EpisodeResponseI) => response.results,
      transformErrorResponse: (response) => {
        return {
          status: response.status,
          data: response.data,
        };
      },
    }),
    getCharacterById: builder.query<CharacterI, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterByIdQuery, useGetCharactersQuery,useGetEpisodesQuery,useGetLocationsQuery } =
  rickAndMortyApi;
