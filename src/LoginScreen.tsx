import React from "react";
import { View, useColorScheme, Text } from "react-native";
import Styles from "./styles";
import { Button, Input } from "react-native-elements";

const LoginScreen: React.FC = () => {
  const isDark = useColorScheme() === "dark";

  const style = Styles(isDark);

  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const submit = () => {
    return false;
  };

  return (
    <View style={style.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={style.text}>LOGIN PAGE</Text>
        <Text>Indirizzo email</Text>
        <Input
          placeholder="Indirizzo email"
          onChangeText={(t) => setUsername(t)}
          value={username}
        />
        <Text>Password</Text>
        <Input
          placeholder="Password"
          onChangeText={(t) => setPassword(t)}
          value={password}
        />
        <Button title="Login" onPress={submit} />
      </View>
    </View>
  );
};

export default LoginScreen;
