import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Header, Image, Text, useTheme } from "@rneui/themed";
import { useAssets } from "expo-asset";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

const Button: React.FC<{
  onPress: () => void;
  title?: string;
  icon: string;
  type?: string;
  active: boolean;
}> = (props) => {
  const style = Style();
  const iconName = props.icon;
  const { theme } = useTheme();
  const iconType = React.useMemo(() => {
    return props.type === undefined ? "font-awesome" : props.type;
  }, [props.type]);

  const title = React.useMemo(() => {
    return props.title !== "" ? props.title : undefined;
  }, [props.type]);

  const color = props.active ? theme.colors.secondary : theme.colors.black;

  return (
    <TouchableOpacity style={style.button} onPress={props.onPress}>
      <Icon name={iconName} type={iconType} color={color} />
      {title && Platform.OS === "web" ? (
        <Text style={{ color: color }}>{title}</Text>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const TopMenu: React.FC<NativeStackHeaderProps> = (props) => {
  const style = Style();
  const [assets, error] = useAssets([require("../assets/logo_tobe.webp")]);
  const { theme } = useTheme();

  const { navigation, route } = props;

  return (
    <>
      <Header
        {...props}
        placement="left"
        leftComponent={
          !!assets &&
          assets.length > 0 && (
            <Image
              source={{
                uri: assets[0].localUri,
              }}
              style={style.logo}
              tintColor={
                route.name === "Home"
                  ? theme.colors.secondary
                  : theme.colors.black
              }
              onPress={() => navigation.navigate("Home")}
            />
          )
        }
        centerComponent={
          <View style={style.cetner}>
            <Button
              title="About us"
              icon="group"
              onPress={() => navigation.navigate("About")}
              active={route.name === "About"}
            />
            <Button
              title="Downloads"
              icon="download"
              onPress={() => navigation.navigate("Downloads")}
              active={route.name === "Downloads"}
            />
          </View>
        }
        rightComponent={
          <View style={style.right}>
            {true ? (
              <Button
                icon="user"
                onPress={() => navigation.navigate("Login")}
                active={route.name === "Login"}
              />
            ) : (
              <Button
                icon="logout"
                type="MaterialIcons"
                onPress={() => navigation.navigate("Logout")}
                active={route.name === "Logout"}
              />
            )}
          </View>
        }
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
      marginLeft: 10,
    },
  });
};
