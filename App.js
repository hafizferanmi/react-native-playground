import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import TourDetails from "./screens/tour-details";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Tour details">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Tour details" component={TourDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
