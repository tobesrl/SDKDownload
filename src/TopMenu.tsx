import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Icon, Image, Text } from "react-native-elements";

const Button: React.FC<{
  onPress: () => void;
  title?: string;
  icon: string;
  type?: string;
}> = (props) => {
  const style = Style();

  return (
    <TouchableOpacity style={style.button} onPress={props.onPress}>
      <Icon
        name={props.icon}
        type={props.type ?? "font-awesome"}
        color="#fff"
      />
      {props.title ? (
        <Text style={style.buttonText}>{props.title}</Text>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const TopMenu: React.FC = () => {
  const nav = useNavigation();
  const style = Style();

  return (
    <>
      <Header
        placement="left"
        leftComponent={
          <Image
            source={{
              uri: "https://tobe-srl.it/wp-content/uploads/2020/05/ToBe_logo_white_transparent_RGB.png",
            }}
            style={style.logo}
            onPress={() => nav.navigate("Home")}
          />
        }
        centerComponent={
          <View style={style.cetner}>
            <Button
              title="Home"
              icon="home"
              onPress={() => nav.navigate("Home")}
            />
            <Button
              title="About us"
              icon="group"
              onPress={() => nav.navigate("About")}
            />
            <Button
              title="Downloads"
              icon="download"
              onPress={() => nav.navigate("Downloads")}
            />
          </View>
        } // Personalizza il titolo del menu
        rightComponent={
          <View style={style.right}>
            {true ? (
              <Icon
                name="user"
                type="font-awesome"
                color="#fff"
                onPress={() => nav.navigate("Login")}
              />
            ) : (
              <Icon
                name="logout"
                type="MaterialIcons"
                color="#fff"
                onPress={() => nav.navigate("Logout")}
              />
            )}
          </View>
        }
        backgroundColor="#333" // Personalizza il colore dello sfondo del menu
      />
    </>
  );
};

export default TopMenu;

const Style = () => {
  return StyleSheet.create({
    logo: {
      width: 100,
      height: 35,
    },
    cetner: {
      flexDirection: "row",
      width: "100%",
      height: 35,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    right: {
      flexDirection: "row",
      alignItems: "center",
      height: 35,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "white",
      marginLeft: 5,
    },
  });
};
