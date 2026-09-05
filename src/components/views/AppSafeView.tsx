import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../styles/colors";
import { isAndroid } from "../../constants/constants";

interface AppSafeViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

console.log(StatusBar.currentHeight)

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container,style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingTop: isAndroid ? StatusBar.currentHeight || 0 : 0,
  },
  container:{
    flex:1,
  }
});
