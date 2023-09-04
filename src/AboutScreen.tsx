import React from "react";
import { View, useColorScheme, Text } from "react-native";
import Styles from "./styles";

const AboutScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";

  const style = Styles(isDark);
  return (
    <View style={style.container}>
      <Text style={style.text}>
        Abuot Us
      </Text>
    </View>
  );
};

export default AboutScreen;
