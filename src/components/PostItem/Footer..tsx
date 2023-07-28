import { Heart, Comment, Share, Save } from "../../../assets";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Footer: React.FC<any> = () => {
  return (
    <View style={[styles.mainContainer, styles.container]}>
      <View style={styles.mainContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <Heart />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Comment />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Share />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Save />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  container: {
    justifyContent: "space-between",
  },
});

export default Footer;
