import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/settings/ProfileScreen";
import CartScreen from "../screens/cart/CartScreen";
import { AppColors } from "../styles/colors";
import { House, ShoppingBag, User } from "lucide-react-native";
import { vs } from "react-native-size-matters";
import { isAndroid } from "../constants/constants";

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.button,
        tabBarLabelStyle:{marginTop:vs(5)},
        tabBarStyle: isAndroid && {
            height:vs(50)
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ShoppingBag size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:(({size,color}) => <User size={size} color={color}/>)}}/>
    </Tab.Navigator>
  );
}
