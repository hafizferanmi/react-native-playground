import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import useBattery from "../../hooks/use-battery";
import useImagePicker from "../../hooks/use-image-picker";
import Button from "../../components/button";

export default function Home() {
  const batteryLevel = useBattery();
  const {
    image,
    openImagePickerAsync,
    openShareDialogAsync,
    clearSelectedImage,
  } = useImagePicker();

  return (
    <View style={styles.container}>
      <Text>Wow started building nice interface on here</Text>
      <StatusBar style="dark" />
      <Text>Current Battery Level: </Text>
      <Text style={batteryLevel <= 15 ? styles.batteryLow : styles.battery}>
        {batteryLevel}
      </Text>

      {image && (
        <View style={styles.container}>
          <Image
            style={styles.thumbnail}
            source={{ uri: image.localUri }}
            style={styles.thumbnail}
          />
        </View>
      )}

      {!image && (
        <Button onButtonPress={openImagePickerAsync} label="Pick a photo" />
      )}

      {image && (
        <Button onButtonPress={openShareDialogAsync} label="Share this image" />
      )}

      {image && (
        <Button onButtonPress={clearSelectedImage} label="Clear image" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  battery: {
    color: "white",
    backgroundColor: "green",
  },
  batteryLow: {
    backgroundColor: "red",
    color: "white",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
