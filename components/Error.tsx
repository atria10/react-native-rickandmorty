import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { generalStyles } from "../generalStyles";
import { primaryColor } from "../costants";

type Props = {
  error: FetchBaseQueryError;
};

const Error = ({ error }: Props) => {
  return (
    <View style={[generalStyles.centerRowContainer, styles.outerContainer]}>
      <View style={[generalStyles.centerRowContainer, styles.innerContainer]}>
        <Text style={styles.text}>{error.status}</Text>
      </View>
    </View>
  );
};

export default Error;

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
