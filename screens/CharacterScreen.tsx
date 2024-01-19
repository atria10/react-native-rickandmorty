import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { useGetCharacterByIdQuery } from "../redux/slices/rickAndMortySlice";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import GridLayout from "../components/GridLayout";
import Title from "../components/Title";
import { useFavorites } from "../hooks/useFavorites";
import { useDispatch } from "react-redux";
import { update } from "../redux/slices/favoritesSlice";
import { primaryColor100 } from "../costants";

type Props = {
  route?: RouteProp<any>;
};

const CharacterScreen = ({ route }: Props) => {
  const { data, error, isLoading } = useGetCharacterByIdQuery(
    route?.params!.id!
  );
  const dispatch = useDispatch();
  function handleFavorite() {
    dispatch(update(data!.id));
  }
  const { isFavorite } = useFavorites();
  if (isLoading) {
    return <Loading text={`Character ID:${route?.params!.id!}`} />;
  }

  if (error) {
    return <Error error={error as FetchBaseQueryError} />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data?.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Title color="#fff">Anagraph</Title>
        <View style={styles.row}>
          <Text style={styles.text}>{data?.gender}</Text>
          <Text style={styles.text}>{data?.species}</Text>
          <Text style={styles.text}>{data?.status}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{data?.origin.name}</Text>
          <Text style={styles.text}>{data?.location.name.substring(0,12)}...</Text>
          <Text style={styles.text}>
            {new Date(data?.created as any as Date).toLocaleDateString()}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleFavorite}
          style={[
            styles.button,
            {
              backgroundColor: isFavorite(data!.id) ? "red" : "green",
            },
          ]}
        >
          <Text style={[styles.text, { color: "#fff" }]}>
            {isFavorite(data!.id)
              ? "Remove from favorites"
              : "Add to favorites"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor100,
    padding: 16,
  },
  imageContainer: {
    borderRadius: 12,
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 12,
  },
  infoContainer: {
    marginVertical: 12,
  },
  row: {
    margin: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 16,
    width: "70%",
    borderRadius: 10,
  },
});
