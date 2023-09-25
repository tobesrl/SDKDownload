import React from "react";
import { Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

const LoginScreen: React.FC = () => {
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const submit = () => {
    return false;
  };

  return (
    <View>
      <View style={{ justifyContent: "center" }}>
        <Text>LOGIN PAGE</Text>
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
