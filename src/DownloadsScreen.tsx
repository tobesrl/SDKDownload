import React from "react";
import { View, useColorScheme, Text } from "react-native";
import Styles from "./styles";

const DownloadsScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";

  const style = Styles(isDark);
  return (
    <View style={style.container}>
      <Text style={style.text}>Downloads</Text>
      <Text style={style.text}>Geolocation</Text>
      <Text style={style.text}>Hotspot</Text>
      <Text style={style.text}>Maps</Text>
    </View>
  );
};

export default DownloadsScreen;
