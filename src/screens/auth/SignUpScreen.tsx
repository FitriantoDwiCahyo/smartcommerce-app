import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import AppTextInput from "../../components/text_input/AppTextInput";
import { s } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import { CircleX, Eye, EyeClosed, Lock, Mail, User } from "lucide-react-native";

const SignUpScreen = () => {
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  return (
    <AppSafeView style={styles.container}>
      <AppTextInput
        placeholder="Email"
        childrenOne={<Mail size={s(18)} />}
        childrenTwo={<CircleX size={s(18)} onPress={() => setEmail("")} />}
        value={email}
        onChangeText={setEmail}
      />
      <AppTextInput
        placeholder="Username"
        childrenOne={<User size={18} />}
        childrenTwo={<CircleX size={18} onPress={() => setUsername("")} />}
        style={styles.inputUsername}
        value={username}
        onChangeText={setUsername}
      />
      <AppTextInput
        placeholder="Password"
        childrenOne={<Lock size={18} />}
        childrenTwo={
          !isVisible ? (
            <Eye size={s(18)} onPress={() => setIsVisible((value) => !value)} />
          ) : (
            <EyeClosed
              size={s(18)}
              onPress={() => setIsVisible((value) => !value)}
            />
          )
        }
        value={password}
        onChangeText={setPassword}
        secureTextEntry={isVisible}
      />
      <AppButton
        title="Register"
        onPress={() => console.log("")}
        style={styles.button}
      />
    </AppSafeView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(18),
  },
  inputUsername: {
    marginVertical: s(18),
  },
  button: {
    marginTop: s(18),
  },
});
