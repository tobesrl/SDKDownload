import { useNavigation } from "@react-navigation/native";
import { Header, Image, Text, useTheme, useThemeMode } from "@rneui/themed";
import { useAssets } from "expo-asset";
import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { Icon } from "react-native-elements";

const Button: React.FC<{
  onPress: () => void;
  title?: string;
  icon: string;
  type?: string;
}> = (props) => {
  const style = Style();
  const iconName = props.icon;
  const theme = useTheme();
  const iconType = React.useMemo(() => {
    return props.type === undefined ? "font-awesome" : props.type;
  }, [props.type]);

  const title = React.useMemo(() => {
    return props.title !== "" ? props.title : undefined;
  }, [props.type]);

  return (
    <TouchableOpacity style={style.button} onPress={props.onPress}>
      <Icon name={iconName} type={iconType} color={theme.theme.colors.black} />
      {title && Platform.OS === "web" ? <Text>{title}</Text> : <></>}
    </TouchableOpacity>
  );
};

const TopMenu: React.FC = () => {
  const nav = useNavigation();
  const style = Style();
  const colorScheme = useColorScheme();
  const { setMode } = useThemeMode();
  const theme = useTheme();
  const [assets, error] = useAssets([require("../assets/logo_tobe.webp")]);
  React.useEffect(() => {
    setMode(colorScheme);
  }, [colorScheme]);

  // React.useEffect(() => {
  //   Asset.loadAsync(moduleIds).then(setAssets).catch(setError);
  // }, []);

  return (
    <>
      <Header
        placement="left"
        leftComponent={
          !!assets && assets.length > 0 ? (
            <Image
              source={{
                uri: assets[0].localUri,
              }}
              style={style.logo}
              onPress={() => nav.navigate("Home")}
            />
          ) : (
            <></>
          )
        }
        centerComponent={
          <View style={style.cetner}>
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
                color={theme.theme.colors.black}
                onPress={() => nav.navigate("Login")}
              />
            ) : (
              <Icon
                name="logout"
                type="MaterialIcons"
                color={theme.theme.colors.black}
                onPress={() => nav.navigate("Logout")}
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
