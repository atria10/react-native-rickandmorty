import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { primaryColor } from "../costants";
import Filters from "./Filters";
import IconButton from "./IconButton";
import Title from "./Title";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.titleContainer}>
        <Title color="#fff">Rick and Morty</Title>
      </View>
      <View style={styles.iconContainer}>
        <IconButton
          icon={{ name: "filter-alt", size: 32, color: "#fff" }}
          onPress={() => setIsOpen(true)}
        />
        <Filters isOpen={isOpen} setIsOpen={setIsOpen} />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    flexDirection: "row",
    height: 80,
    alignItems: "flex-end",
  },
  titleContainer: {
    flex: 0.85,
    alignItems: "center",
    paddingLeft: 60,
  },
  iconContainer: {
    flex: 0.15,
    marginTop: 20,
  },
});
