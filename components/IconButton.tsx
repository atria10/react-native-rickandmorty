import { MaterialIcons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  icon: IconProps<any>;
  onPress: () => void;
};

const IconButton = ({ icon, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons {...icon} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
