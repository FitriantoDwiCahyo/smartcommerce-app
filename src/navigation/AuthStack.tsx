import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreen } from "react-native-screens";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import { AppColors } from "../styles/colors";
import { ChevronLeft } from "lucide-react-native";
import { MainTabs } from "./MainTabs";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: AppColors.background },
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: "Sign-up",
          headerStyle: { backgroundColor: AppColors.background },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
