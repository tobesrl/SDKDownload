import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppParamsList } from "./AppParamsList";
import AboutScreen from "./src/AboutScreen";
import DownloadsScreen from "./src/DownloadsScreen";
import HomeScreen from "./src/HomeScreen";
import TopMenu from "./src/TopMenu";
import LoginScreen from "./src/LoginScreen";
import Theme from "./src/Theme";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamsList {}
  }
}

const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
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
          <NavigationContainer>
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
