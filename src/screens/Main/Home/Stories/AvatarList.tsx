import { useFetchStories } from "@hooks/api/useStoriesApi";
import React from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicon from "react-native-vector-icons/Ionicons";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { SCREENS } from "@constants/";
import { RootStackParamList } from "types";
import { StackNavigationProp } from "@react-navigation/stack";

export type Story = { id: string; avatar: string; username: string };

const Stories: React.FC<{
  navigation: StackNavigationProp<RootStackParamList>;
}> = ({ navigation }) => {
  const { data: stories, isLoading } = useFetchStories();
  if (isLoading || !stories?.length) return null;

  return (
    <FlatList
      data={stories}
      contentContainerStyle={styles.container}
      renderItem={({ item }: { item: Story }) => (
        <RNBounceable
          style={styles.storyUsernameContainer}
          onPress={() => navigation.push(SCREENS.stories)}
        >
          <View style={styles.storyContainer}>
            <LinearGradient
              colors={["#C913B9", "#F9373F", "#FECD00"]}
              style={styles.gradient}
            />
            <View style={styles.storyAvatarContainer}>
              <Image style={styles.storyAvatar} source={{ uri: item.avatar }} />
            </View>
          </View>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{item.username}</Text>
          </View>
        </RNBounceable>
      )}
      keyExtractor={item => item.id}
      bounces={false}
      horizontal
      ListHeaderComponent={() => (
        <RNBounceable style={styles.userAvatarContainer}>
          <View style={styles.storyAvatarContainer}>
            <Image
              style={styles.storyAvatar}
              source={{ uri: stories[0]?.avatar }}
            />
          </View>
          <TouchableOpacity style={styles.addIconContainer} activeOpacity={0.8}>
            <Ionicon name="add-outline" style={styles.addIcon} />
          </TouchableOpacity>
          <View style={styles.usernameContainer}>
            <Text style={[styles.username, { marginTop: 5.5 }]}>
              mohit_harsh
            </Text>
          </View>
        </RNBounceable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  username: { color: "white", fontSize: 11 },
  storyUsernameContainer: { display: "flex", flexDirection: "column", gap: 4 },
  storyContainer: {
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    overflow: "hidden",
    position: "relative",
  },
  storyAvatarContainer: {
    width: 88,
    height: 88,
    borderRadius: 44,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },
  storyAvatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderColor: "black",
    borderWidth: 3,
    objectFit: "cover",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
  },
  userAvatarContainer: {
    position: "relative",
    marginRight: 15,
    borderRadius: 44,
    height: 88,
    width: 88,
  },
  addIconContainer: {
    position: "absolute",
    bottom: 2,
    right: 4,
    backgroundColor: "#1FA1FF",
    borderRadius: 20,
    padding: 4,
  },
  addIcon: {
    color: "white",
    fontSize: 15,
  },
  usernameContainer: { alignItems: "center", width: 88 },
});

export default Stories;
