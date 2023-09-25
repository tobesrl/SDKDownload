import { Button, Card, Input, Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

const LoginScreen: React.FC = () => {
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const submit = () => {
    return false;
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Card containerStyle={{ width: 300 }}>
        <Card.Title>LOGIN PAGE</Card.Title>
        <Card.Divider />
        <Text>Indirizzo email</Text>
        <Input
          placeholder="Indirizzo email"
          onChangeText={(t) => setUsername(t)}
          value={username}
        />
        <Text>Password</Text>
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(t) => setPassword(t)}
          value={password}
        />
        <Button title="Login" onPress={submit} />
      </Card>
    </View>
  );
};

export default LoginScreen;
