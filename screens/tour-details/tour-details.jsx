import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/button";

const TourDetails = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Our tour details page</Text>
      <Button
        label="Go home"
        onButtonPress={() => {
          navigation.navigate("home");
        }}
      />
    </View>
  );
};

export default TourDetails;
