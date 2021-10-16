import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ buttonStyle, textStyle, label, onButtonPress }) => {
  return (
    <TouchableOpacity onPress={onButtonPress} style={textStyle}>
      <Text style={buttonStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
