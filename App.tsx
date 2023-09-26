import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppParamsLinking, AppParamsList } from "./AppParamsList";
import AboutScreen from "./src/AboutScreen";
import DownloadsScreen from "./src/DownloadsScreen";
import HomeScreen from "./src/HomeScreen";
import LoginScreen from "./src/LoginScreen";
import Theme from "./src/Theme";
import TopMenu from "./src/TopMenu";
import NotFoundScreen from "./src/NotFoundScreen";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamsList {}
  }
}

const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        header: (props) => <TopMenu {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Downloads" component={DownloadsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Logout" component={DownloadsScreen} />
      <Stack.Screen name="NoMatch" component={NotFoundScreen} />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={Theme(colorScheme)}>
          <NavigationContainer linking={AppParamsLinking}>
            <StatusBar style={colorScheme} />
            {/* <TopMenu /> */}
            <MainNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
