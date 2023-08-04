import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { GLOBAL_STYLES } from "styles";
import { Notification } from ".";

const MESSAGE_TYPES: { follow_request: string; follow: string } = {
  follow_request: "wants to follow you",
  follow: "started following you",
};

const NotificationItem: React.FC<{
  notification: Omit<Notification, "time">;
}> = ({ notification }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(
    notification.is_following
  );
  return (
    <View style={styles.container}>
      <Image source={{ uri: notification.avatar }} style={styles.avatar} />
      <Text style={styles.username}>{notification.username}</Text>
      <Text style={{ color: "white" }}>
        {MESSAGE_TYPES[notification.action]}
      </Text>
      <TouchableOpacity
        onPress={() => setIsFollowing(isFollowing => !isFollowing)}
        style={
          isFollowing
            ? [styles.followButton, styles.followButtonSecondary]
            : [styles.followButton, styles.followButtonPrimary]
        }
        activeOpacity={0.8}
      >
        <Text style={styles.followText}>
          {isFollowing ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 13,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    ...GLOBAL_STYLES.dark.username.bold,
    marginLeft: 8,
    fontSize: 14,
  },
  followButton: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  followButtonPrimary: {
    backgroundColor: "#1FA1FF",
  },
  followButtonSecondary: { backgroundColor: "rgba(239, 239, 239, 0.20)" },
  followText: { color: "white" },
});

export default NotificationItem;
