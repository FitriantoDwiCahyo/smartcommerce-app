import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { IMAGES } from "../../constants/images";
import { s } from "react-native-size-matters";
import AppTextInput from "../../components/text_input/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Feather from "@expo/vector-icons/Feather";
import { Mail, Lock, Eye, CircleX ,EyeOff} from "lucide-react-native";

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <AppSafeView
      style={{
        alignItems: "center",
        paddingHorizontal: s(18),
      }}
    >
      <Image source={IMAGES.appLogo} style={styles.image} />
      <AppTextInput
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
        childrenOne={<Mail size={s(18)} color={AppColors.grey} />}
        childrenTwo={
          email !== "" ? (
            <CircleX
              size={s(18)}
              color={AppColors.grey}
              onPress={() => setEmail("")}
            />
          ) : (
            <View />
          )
        }
        style={{ marginTop: s(18) }}
      />
      <AppTextInput
        placeholder="Enter your password"
        onChangeText={setPassword}
        value={password}
        childrenOne={<Lock size={s(18)} color={AppColors.grey} />}
        childrenTwo={
          isVisible ? <EyeOff
            size={s(18)}
            color={AppColors.grey}
            onPress={() => setIsVisible((value) => !value)}
          /> : <Eye
            size={s(18)}
            color={AppColors.grey}
            onPress={() => setIsVisible((value) => !value)}
          />
        }
        secureTextEntry={isVisible}
        style={{ marginTop: s(18) }}
      />
      <AppText style={styles.btnForgot} onPress={() => console.log("test")}>
        {" "}
        Forgot Password ?{" "}
      </AppText>
      <AppButton
        title="Login"
        onPress={() => navigation.navigate("Main")}
        style={{ marginTop: s(18) }}
      />
      <AppButton
        title="Register"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={styles.btnRegist}
        textColor={AppColors.borderRegis}
      />
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  image: {
    height: s(150),
    width: s(150),
    marginBottom: s(18),
  },
  btnRegist: {
    marginTop: s(18),
    borderWidth: 1,
    borderColor: AppColors.borderRegis,
    backgroundColor: "transparent",
  },
  btnForgot: {
    marginTop: s(8),
    fontSize: s(12),
    color: "red",
    alignSelf: "flex-end",
  },
});
