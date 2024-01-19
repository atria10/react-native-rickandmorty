import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { generalStyles } from "../generalStyles";

type Props = {
  children: string;
  color?: string;
};

const Title = ({ children, color = "#000" }: Props) => {
  return (
    <View style={generalStyles.centerRowContainer}>
      <Text style={[generalStyles.textBold, styles.text, { color }]}>
        {children}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontStyle: "italic",
    textAlign: "center",
  },
});
