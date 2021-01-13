import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Opacity from "./src/screens/Opacity";
import Color from "./src/screens/Color";
import Rotate from "./src/screens/Rotate";
import Shake from "./src/screens/Shake";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="opacity"
            component={Opacity}
            options={{ title: "Fade in/out" }}
          />
          <Stack.Screen
            name="color"
            component={Color}
            options={{ title: "Color" }}
          />
          <Stack.Screen
            name="rotate"
            component={Rotate}
            options={{ title: "Rotate" }}
          />
          <Stack.Screen
            name="shake"
            component={Shake}
            options={{ title: "Shake" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
