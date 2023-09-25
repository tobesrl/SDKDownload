import { ListItem, Text } from "@rneui/themed";
import React from "react";
import { FlatList, View } from "react-native";
import { Structure } from "./Theme";

const DownloadsScreen: React.FC = () => {
  const list = [
    {
      title: "ToBe Geolocation iOS",
      subtitle: "v1.2.8",
    },
    {
      title: "ToBe Geolocation Android",
      subtitle: "v1.4.0",
    },
    {
      title: "ToBe Admin",
      subtitle: "v0.4.1",
    },
    {
      title: "React Native ToBe Hotspot",
      subtitle: "v0.5.6",
    },
    {
      title: "React Native Indoor Maps",
      subtitle: "v0.0.0-beta.0",
    },
  ];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      {/* <Avatar source={{ uri: item.avatar_url }} /> */}
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
};

export default DownloadsScreen;
