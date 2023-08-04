import SearchInactive from "../../../../assets/SearchInactive";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import useAnimatedHeader from "@hooks/useAnimatedHeader";
import { HEADER_HEIGHT } from "@screens/Main/Home/InstagramHeader";
import { SCREEN_WIDTH } from "@constants/";
import IonIcon from "react-native-vector-icons/Ionicons";
import { GLOBAL_STYLES } from "styles";

const TopBar: React.FC<{ scrollPosition: SharedValue<number> }> = ({
  scrollPosition,
}) => {
  const headerStyle = useAnimatedHeader({ scrollPosition });

  return (
    <Animated.View style={[styles.container, headerStyle]}>
      <TextInput
        style={styles.search}
        placeholder="Search"
        placeholderTextColor="#cacaca"
      />
      <IonIcon name="search-outline" style={styles.searchIcon} />
      <IonIcon name="location-outline" style={styles.locationIcon} />
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
    height: HEADER_HEIGHT - 5,
    backgroundColor: GLOBAL_STYLES.dark.backgroundColor,
  },
  search: {
    backgroundColor: "rgba(239, 239, 239, 0.20);",
    borderRadius: 10,
    color: "white",
    paddingLeft: 50,
    width: SCREEN_WIDTH - 55,
    alignSelf: "flex-start",
    margin: 10,
    height: 35,
  },
  searchIcon: {
    position: "absolute",
    top: 15,
    left: 25,
    fontSize: 22,
    color: "white",
  },
  locationIcon: {
    position: "absolute",
    top: 13,
    right: 10,
    fontSize: 28,
    color: "white",
  },
});

export default TopBar;
