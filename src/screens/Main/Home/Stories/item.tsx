import * as React from "react";
import { StyleSheet, View, Image, TextInput, Text } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

import { PostObject } from "../PostItem";
import { formatUsername } from "utils";
import { GLOBAL_STYLES } from "styles";
import { ViewStyle } from "react-native";

const Story: React.FC<{ story: PostObject }> = ({ story }) => {
  const { imageUrl, username, avatar } = story;
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.userInfo}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{ uri: avatar }} />
          </View>
          <Text style={styles.username}>{formatUsername(username)}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Send a message"
          placeholderTextColor="white"
          selectionColor="white"
        />
        <AntIcon name="hearto" color="white" size={28} />
        <IonIcon name="send-outline" color="white" size={28} />
      </View>
    </>
  );
};
export default Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  userInfo: {
    position: "absolute",
    top: 16,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: GLOBAL_STYLES.dark.username.bold as ViewStyle,
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    gap: 15,
  },
  input: {
    flex: 1,
    color: "white",
    borderWidth: 1,
    borderRadius: 20,
    padding: 7,
    paddingHorizontal: 15,
    borderColor: "white",
  },
});
