import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@constants/";
import React from "react";
import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { TAB_BAR_HEIGHT } from "..";
import ReelsComponent from "./Content";

const Reels: React.FC<PropsWithChildren> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSecondary}>
        <Text style={styles.header}>Reels</Text>
        <Feather name="camera" style={styles.cameraIcon} />
      </View>
      <ReelsComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 20, fontWeight: "bold", color: "white" },
  cameraIcon: { fontSize: 25, color: "white" },
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "relative",
    backgroundColor: "black",
    bottom: TAB_BAR_HEIGHT,
  },
  containerSecondary: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: TAB_BAR_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    padding: 10,
  },
});

export default Reels;
