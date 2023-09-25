import React from "react";
import { Text, useThemeMode } from "@rneui/themed";

const HomeScreen: React.FC = () => {
  const theme = useThemeMode();

  return (
    <>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{theme.mode}</Text>
    </>
  );
};

export default HomeScreen;
