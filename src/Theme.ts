import { createTheme, darkColors, lightColors } from "@rneui/themed";
import { ColorSchemeName, Platform, StyleSheet } from "react-native";

const Theme = (colorScheme: ColorSchemeName) =>
  createTheme({
    lightColors: {
      ...Platform.select({
        default: lightColors.platform.android,
        ios: lightColors.platform.ios,
      }),
    },
    darkColors: {
      ...Platform.select({
        default: darkColors.platform.android,
        ios: darkColors.platform.ios,
      }),
    },
    mode: colorScheme,
  });

export const Structure = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    ...Platform.select({
      web: {
        maxWidth: 980,
      },
    }),
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },
});

export default Theme;
