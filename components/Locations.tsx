import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetLocationsQuery } from "../redux/slices/rickAndMortySlice";
import Loading from "./Loading";
import Error from "./Error";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import GridLayout from "./GridLayout";
import { LocationI } from "../interfaces/rickAndMorty.interface";
import LocationTile from "./gridTile/LocationTile";

export default function Locations() {
  const { data, error, isLoading } = useGetLocationsQuery();
  if (isLoading) {
    return <Loading text={"Locations"} />;
  }

  if (error) {
    return <Error error={error as FetchBaseQueryError} />;
  }

  function renderLocationr(item: LocationI) {
    return <LocationTile item={item} />;
  }

  return (
    <View style={styles.container}>
      {/* <Title>Characters</Title> */}
      <GridLayout
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => renderLocationr(item.item as LocationI)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
