import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreen } from "react-native-screens";
import { AuthStack } from "./AuthStack";
import { MainTabs } from "./MainTabs";

const Stack = createNativeStackNavigator();

export default function MainAppStack() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="Main" component={MainTabs}/>
        </Stack.Navigator>
    );
}