import React, { Children, useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from "react-native";
import NavigationView from "./navigation-view";

const NavigationDrawer = ({ children }) => {
  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={NavigationView}
    >
      {children}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});

export default NavigationDrawer;
