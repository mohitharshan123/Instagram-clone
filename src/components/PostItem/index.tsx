import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Footer from "./Footer.";
import Header from "./Header";

export type PostObject = {
  username: string;
  createdAt: string;
  imageUrl: string;
  avatar: string;
  caption: string;
  likes: number;
};

const Post: React.FC<{ post: PostObject }> = ({ post }) => {
  const { username, avatar, imageUrl } = post;

  return (
    <View style={styles.container}>
      <Header {...{ username, avatar }} />
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10 },
  image: {
    width: "100%",
    height: 360,
    objectFit: "cover",
  },
});

export default Post;
