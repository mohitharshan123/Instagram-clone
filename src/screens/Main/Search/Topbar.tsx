import SearchInactive from "../../../../assets/SearchInactive";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import useAnimatedHeader from "@hooks/useAnimatedHeader";
import { HEADER_HEIGHT } from "@screens/Main/Home/InstagramHeader";
import { SCREEN_WIDTH } from "@constants/";

const TopBar: React.FC<{ scrollPosition: SharedValue<number> }> = ({
  scrollPosition,
}) => {
  const headerStyle = useAnimatedHeader({ scrollPosition });

  return (
    <Animated.View style={[styles.container, headerStyle]}>
      <TextInput style={styles.search} />
      <SearchInactive style={styles.searchIcon} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: HEADER_HEIGHT + 5,
    backgroundColor: "black",
  },
  search: {
    backgroundColor: "rgba(239, 239, 239, 0.20);",
    borderRadius: 5,
    color: "white",
    paddingLeft: 50,
    width: SCREEN_WIDTH - 20,
    margin: 10,
    height: 35,
  },
  searchIcon: { position: "absolute", top: 15, left: 25, height: 5, width: 5 },
});

export default TopBar;
