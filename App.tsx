import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
 const [loaded,error] = useFonts({
    "Nunito-Bold" : require("./src/assets/fonts/nunito/Nunito-Bold.ttf"),
    "Nunito-Medium":  require("./src/assets/fonts/nunito/Nunito-Medium.ttf"),
    "Nunito-Regular":  require("./src/assets/fonts/nunito/Nunito-Regular.ttf"),
  });

  useEffect(()=>{
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  },[loaded,error])

  if(!loaded && !error){
    return null;
  }

  return <NavigationContainer>
    <MainAppStack/>
  </NavigationContainer>;
}
