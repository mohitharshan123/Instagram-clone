import { SCREEN_WIDTH } from "@constants/";
import React from "react";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import { GLOBAL_STYLES } from "styles";
import Count from "./Count";

const AVATAR_SOURCE =
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg";

const AVATAR_CONTAINER_WIDTH = 100;
const COUNT_CONTAINER_HORIZONTAL_PADDING = 80;
const COUNT_CONTAINER_WIDTH =
  SCREEN_WIDTH - COUNT_CONTAINER_HORIZONTAL_PADDING - AVATAR_CONTAINER_WIDTH;

const Info: React.FC = () => (
  <View style={styles.topContainer}>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{ uri: AVATAR_SOURCE }} />
      <Text style={styles.name}>Mohit Harshan</Text>
      <Text style={styles.bio}>Eat, sleep, code </Text>
    </View>
    <View style={styles.countContainer}>
      <Count label="Posts" count={20} />
      <Count label="Followers" count="200k" />
      <Count label="Following" count={1459} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    padding: 20,
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    gap: 1,
    width: AVATAR_CONTAINER_WIDTH,
  },
  bio: { color: "white", textAlign: "center", fontSize: 12, fontWeight: "600" },
  avatar: { height: 70, width: 70, borderRadius: 35 },
  name: {
    ...GLOBAL_STYLES.dark.username.bold,
    fontSize: 13,
    marginTop: 4,
  } as ViewStyle,
  countContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    width: COUNT_CONTAINER_WIDTH,
  },
});

export default Info;
