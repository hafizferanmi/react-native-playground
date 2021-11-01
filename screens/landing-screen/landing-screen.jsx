import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LandingScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text>Nice landing page</Text>
      <Button
        label="Go home"
        onButtonPress={() => {
          navigation.navigate("home");
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {},
});

export default LandingScreen;
