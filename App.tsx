import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { PropsWithChildren } from "react";
import { Text, ThemeProvider, useTheme } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppParamsLinking, AppParamsList } from "./AppParamsList";
import AboutScreen from "./src/AboutScreen";
import DownloadsScreen from "./src/DownloadsScreen";
import HomeScreen from "./src/HomeScreen";
import TopMenu from "./src/TopMenu";
import LoginScreen from "./src/LoginScreen";
import Theme from "./src/Theme";
import { View } from "react-native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamsList {}
  }
}

// type Proa = keyof linking.screens;

const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Downloads" component={DownloadsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Logout" component={DownloadsScreen} />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>
          <NavigationContainer linking={AppParamsLinking}>
            <StatusBar style="auto" />
            <TopMenu />
            <MainNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
