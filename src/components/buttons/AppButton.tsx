import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
}

const AppButton: FC<AppButtonProps> = ({
  title,
  onPress,
  backgroundColor = AppColors.button,
  textColor = AppColors.white,
  style,
  styleTitle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }, style]}
      onPress={onPress}
    >
      <AppText
        style={StyleSheet.flatten([
          styles.textButton,
          { color: textColor },
          styleTitle,   
        ])}
        variant="bold"
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: s(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(8),
  },
  textButton: {
    fontSize: s(14),
  },
});
