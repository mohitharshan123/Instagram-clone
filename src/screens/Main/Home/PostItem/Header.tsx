import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { GLOBAL_STYLES } from "styles";
import { formatUsername } from "utils";
import { PostObject } from ".";

import { HorizontalInfo } from "../../../../../assets";

type HeaderProps = Pick<PostObject, "username" | "avatar">;

export const VALIDATION_SCHEMA = false;
const Header: React.FC<HeaderProps> = ({ username, avatar }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.userContainer}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.username}>{formatUsername(username)}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <HorizontalInfo />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  username: GLOBAL_STYLES.dark.username.bold as ViewStyle,
});

export default Header;
