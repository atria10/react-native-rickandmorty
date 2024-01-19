import React from "react";
import { StyleSheet, View } from "react-native";
import { CharacterI } from "../interfaces/rickAndMorty.interface";
import GridLayout from "./GridLayout";
import CharacterTile from "./gridTile/CharacterTile";

type Props = {
  characters: CharacterI[];
  isFavorite: (id:number) => boolean;
};

const Characters = ({ characters, isFavorite }: Props) => {
  function renderCharacter(item: CharacterI) {
    return <CharacterTile item={item} isFavorite={isFavorite(item.id)} />;
  }
  return (
    <View style={styles.container}>
      {/* <Title>Characters</Title> */}
      <GridLayout
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => renderCharacter(item.item as CharacterI)}
        numColumns={2}
      />
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
