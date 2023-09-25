import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, useColorScheme } from "react-native";
import Styles from "./styles";
import { Image } from "react-native-elements";

const HomeScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";

  const style = Styles(isDark);

  const nav = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.text}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
};

export default HomeScreen;
