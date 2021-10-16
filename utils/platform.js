import { Platform } from "react-native";

export const isIOS = () => Platform.OS === "ios";
export const isAndroid = () => Platform.OS === "android";
export const isWindows = () => Platform.OS === "windows";
export const isWeb = () => Platform.OS === "web";
