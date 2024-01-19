import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  CharacterI,
  EpisodeI,
  LocationI,
} from "../interfaces/rickAndMorty.interface";
import { SafeAreaView } from "react-native-safe-area-context";

const GridLayout = (
  props: FlatListProps<CharacterI | EpisodeI | LocationI>
) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList {...props} />
    </SafeAreaView>
  );
};

export default GridLayout;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
