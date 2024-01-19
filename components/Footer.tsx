import React from "react";
import { StyleSheet, View } from "react-native";
import { primaryColor } from "../costants";
import { generalStyles } from "../generalStyles";
import { useNavigate } from "../hooks/useNavigate";
import IconButton from "./IconButton";

type IconI = {
  url: "Characters" | "Favorites";
  icon: string;
};

const icons: IconI[] = [
  { url: "Characters", icon: "people-alt" },
  { url: "Favorites", icon: "star" },
];

export default function Footer() {
  const { navigateHandler } = useNavigate();

  return (
    <View style={[generalStyles.centerRowContainer, styles.container]}>
      {icons.map((icon) => (
        <IconButton
          key={icon.url}
          icon={{
            name: icon.icon,
            color: "#fff",
            size: 32,
          }}
          onPress={() => navigateHandler({ hasParams: false, link: icon.url })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "space-around",
    backgroundColor: primaryColor,
  },
});
