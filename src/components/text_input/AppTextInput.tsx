import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppTextInputProps {
  childrenOne: React.ReactNode;
  childrenTwo: React.ReactNode;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const AppTextInput = ({
  childrenOne,
  childrenTwo,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType,
  style,
  textStyle,
}: AppTextInputProps) => {
  const flattenStyle = StyleSheet.flatten([styles.container, style]);
  const textFlattenStyle = StyleSheet.flatten([styles.textInput, textStyle]);
  return (
    <View style={flattenStyle}>
      {childrenOne}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={textFlattenStyle}
      />
      {childrenTwo}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    width: "100%",
    height: s(45),
    borderRadius: s(5),
    alignItems: "center",
    borderColor: AppColors.border,
    borderWidth: 1,
    paddingHorizontal: s(8),
  },
  textInput: {
    flex:1,
    marginLeft:s(8)
  },
});
