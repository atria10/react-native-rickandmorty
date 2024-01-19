import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { primaryColor100 } from "../../costants";
import { generalStyles } from "../../generalStyles";
import { useNavigate } from "../../hooks/useNavigate";
import { CharacterI } from "../../interfaces/rickAndMorty.interface";
import { update } from "../../redux/slices/favoritesSlice";
import IconButton from "../IconButton";

type Props = {
  item: CharacterI;
  isFavorite: boolean;
};

function getStatusColor(status: string) {
  return status.toLowerCase() === "alive"
    ? "green"
    : status.toLowerCase() === "dead"
    ? "red"
    : "orange";
}

const CharacterTile = ({ item, isFavorite }: Props) => {
  const dispatch = useDispatch();

  const { navigateHandler } = useNavigate();

  function handleFavorite() {
    dispatch(update(item.id));
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigateHandler({
          hasParams: true,
          link: "Character",
          id: item.id,
          name: item.name,
        })
      }
    >
      <View
        style={[generalStyles.spaceBetweeenRowContainer, styles.titleContainer]}
      >
        <Text style={styles.text}>{item.name}</Text>
        <IconButton
          icon={{
            name: "star",
            color: isFavorite ? "#ffc905" : "#fff",
            size: 24,
          }}
          onPress={handleFavorite}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View
        style={[generalStyles.spaceBetweeenRowContainer, styles.infoContainer]}
      >
        <Text
          style={[
            generalStyles.textBold,
            styles.text,
            { color: getStatusColor(item.status) },
          ]}
        >
          {item.status.toUpperCase()}
        </Text>
        <Text style={styles.text}>{item.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterTile;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    margin: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d45a50",
    backgroundColor: primaryColor100,
  },
  titleContainer: {
    padding: 4,
  },
  text: {
    textAlign: "center",
    color:'#fff'
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  infoContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
