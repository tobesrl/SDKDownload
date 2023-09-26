import React from "react";
import { Text, useThemeMode } from "@rneui/themed";
import { Structure } from "./Theme";
import { View } from "react-native";

const HomeScreen: React.FC = () => {
  const theme = useThemeMode();

  return (
    <View style={Structure.wrapper}>
      <Text h2>Home Page</Text>
      <View style={[Structure.container, Structure.spaceEvenly]}>
        <Text>Actual theme mode: {theme.mode}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
