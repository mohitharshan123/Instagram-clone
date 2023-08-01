import { useFetchStories } from "@hooks/api/useStoriesApi";
import React from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicon from "react-native-vector-icons/Ionicons";

export type Story = { id: string; avatar: string };

const Stories: React.FC<any> = () => {
  const { data: stories, isLoading } = useFetchStories();
  if (isLoading) return null;

  return (
    <FlatList
      data={stories}
      contentContainerStyle={styles.container}
      renderItem={({ item }: { item: Story }) => (
        <TouchableOpacity style={styles.storyContainer} activeOpacity={0.8}>
          <LinearGradient
            colors={["#C913B9", "#F9373F", "#FECD00"]}
            style={styles.gradient}
          />
          <View style={styles.storyAvatarContainer}>
            <Image style={styles.storyAvatar} source={{ uri: item.avatar }} />
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      bounces={false}
      horizontal
      ListHeaderComponent={() => (
        <View style={styles.userAvatarContainer}>
          <LinearGradient
            colors={["#C913B9", "#F9373F", "#FECD00"]}
            style={styles.gradient}
          />
          <View style={styles.storyAvatarContainer}>
            <Image
              style={styles.storyAvatar}
              source={{ uri: stories[0]?.avatar }}
            />
          </View>
          <TouchableOpacity style={styles.addIconContainer} activeOpacity={0.8}>
            <Ionicon name="add-outline" style={styles.addIcon} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  storyContainer: {
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    overflow: "hidden",
    position: "relative",
  },
  storyAvatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },
  storyAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 32,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
  },
  userAvatarContainer: {
    position: "relative",
    marginRight: 15,
  },
  addIconContainer: {
    position: "absolute",
    bottom: -1,
    right: -1,
    backgroundColor: "#1FA1FF",
    borderRadius: 20,
    padding: 4,
  },
  addIcon: {
    color: "white",
    fontSize: 10,
  },
});

export default Stories;