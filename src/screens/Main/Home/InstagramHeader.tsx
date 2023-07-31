import {
  DropdownIcon,
  InstagramLogo,
  Heart,
  Messenger,
} from "../../../../assets";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import useAnimatedHeader from "@hooks/useAnimatedHeader";
import { SCREENS } from "@constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "types";

export const HEADER_HEIGHT = 50;

export type InstagramHeaderProps = {
  scrollPosition: Animated.SharedValue<number>;
  navigation: StackNavigationProp<RootStackParamList>;
};

const InstagramHeader: React.FC<InstagramHeaderProps> = ({
  scrollPosition,
  navigation,
}) => {
  const headerStyle = useAnimatedHeader({ scrollPosition });
  return (
    <Animated.View style={[styles.container, headerStyle]}>
      <View style={styles.leftContainer}>
        <InstagramLogo />
        <TouchableOpacity activeOpacity={0.8}>
          <DropdownIcon />
        </TouchableOpacity>
      </View>
      <View style={[styles.rightContainer]}>
        <TouchableOpacity
          onPress={() => navigation.push(SCREENS.notifications)}
        >
          <Heart />
        </TouchableOpacity>
        <TouchableOpacity>
          <Messenger />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: HEADER_HEIGHT,
    backgroundColor: "black",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  rightContainer: { display: "flex", flexDirection: "row", gap: 30 },
});

export default InstagramHeader;
