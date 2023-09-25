import { StyleSheet } from "react-native";

const Styles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#000" : "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: isDark ? "#fff" : "#000",
    },
  });

export default Styles;
