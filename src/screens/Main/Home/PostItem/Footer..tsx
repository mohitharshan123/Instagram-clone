import { Comment, Share, Save } from "../../../../../assets";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PostObject } from ".";

const Footer: React.FC<{ post: PostObject }> = ({ post }) => {
  const { likes, caption, username } = post;
  const [isLiked, setIsLiked] = useState<boolean>(post.isLiked ?? false);

  return (
    <View style={styles.verticalContainer}>
      <View style={[styles.mainContainer, styles.container]}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsLiked(isLiked => !isLiked)}
          >
            <AntDesign
              name={isLiked ? "heart" : "hearto"}
              style={[styles.heartIcon, { color: isLiked ? "red" : "white" }]}
            />
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
      <View style={styles.bottomContainer}>
        <Text style={styles.boldText}>{likes} Likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.boldText}>{username}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalContainer: { display: "flex", flexDirection: "column" },
  heartIcon: { fontSize: 24 },
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
  boldText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "white",
  },
  caption: { color: "white", fontSize: 12 },
  bottomContainer: { padding: 10, display: "flex", flexDirection: "column" },
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    marginTop: 4,
  },
});

export default Footer;
