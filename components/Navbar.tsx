import React from "react";
import { StyleSheet, View } from "react-native";
import { primaryColor } from "../costants";
import { useNavigate } from "../hooks/useNavigate";
import IconButton from "./IconButton";
import Title from "./Title";

type Props = {};

const Navbar = (props: Props) => {
  const { navigateHandler } = useNavigate();
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.titleContainer}>
        <Title color="#fff">Rick and Morty</Title>
      </View>
      <View style={styles.iconContainer}>
        <IconButton
          icon={{ name: "settings", size: 32, color: "#fff" }}
          onPress={() =>
            navigateHandler({ hasParams: false, link: "Settings" })
          }
        />
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
  },
});
