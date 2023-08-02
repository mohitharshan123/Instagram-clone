import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { PostObject } from ".";

import { HorizontalInfo } from "../../../../../assets";

type HeaderProps = Pick<PostObject, "username" | "avatar">;

export const VALIDATION_SCHEMA = false;
const Header: React.FC<HeaderProps> = ({ username, avatar }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.userContainer}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.username}>{username}</Text>
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
  username: {
    color: "white",
    fontFamily: "SF UI Display",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 16,
  },
});

export default Header;
