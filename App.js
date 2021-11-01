import React from "react";
import _ from "lodash";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import TourDetails from "./screens/tour-details";
import NavigationDrawer from "./components/navigation-drawer/navigation-drawer";
import LandingScreen from "./screens/landing-screen/landing-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationDrawer>
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen
              name="home"
              component={LandingScreen}
              options={{
                title: "Home",
                headerStyle: {
                  backgroundColor: "red",
                },
                headerTintColor: "yellow",
                headerShown: false,
              }}
            />
            <Screen
              name="tour-details"
              options={{
                title: "Tour details",
                headerStyle: {
                  backgroundColor: "pink",
                },
                headerTintColor: "lilac",
              }}
              component={TourDetails}
            />
          </Navigator>
        </NavigationContainer>
      </NavigationDrawer>
    </SafeAreaProvider>
  );
}
