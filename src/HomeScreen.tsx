import { useThemeMode } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen: React.FC = () => {
  const theme = useThemeMode();
  
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{theme.mode}</Text>
    </View>
  );
};

export default HomeScreen;
