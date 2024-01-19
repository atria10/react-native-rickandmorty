import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { generalStyles } from "../generalStyles";
import { primaryColor } from "../costants";

type Props = {
  text: string;
};

const Loading = ({ text }: Props) => {
  return (
    <View style={[generalStyles.centerRowContainer, styles.outerContainer]}>
    <View style={[generalStyles.centerRowContainer, styles.innerContainer]}>
        <Text style={styles.text}>LOADING {text}...</Text>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 0.8,
    marginHorizontal: 24,
  },
  innerContainer: {
    width: "100%",
    borderWidth: 3,
    borderRadius: 12,
    borderColor: "#d45a50",
    padding: 16,
    gap: 12,
    backgroundColor: primaryColor,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
});
