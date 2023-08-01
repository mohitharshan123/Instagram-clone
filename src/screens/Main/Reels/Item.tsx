import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Video from "react-native-video";
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "@constants/";

type ReelObject = {
  id: number;
  username: string;
  avatar: string;
  video: string;
  caption: string;
  isLiked: boolean;
  likes: number;
};

type ReelProps = { item: ReelObject; index: number; currentIndex: number };

const Reel: React.FC<ReelProps> = ({ item, index, currentIndex }) => {
  const videoRef = useRef(null);

  const [isMute, setIsMute] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(item.isLiked);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setIsMute(isMute => !isMute)}
        style={styles.videoContainer}
      >
        <Video
          videoRef={videoRef}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={{ uri: item.video }}
          muted={isMute}
          style={styles.videoContainer}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={[
          styles.muteIcon,
          { fontSize: isMute ? 20 : 0, padding: isMute ? 20 : 0 },
        ]}
      />
      <View style={styles.rightContainer}>
        <View>
          <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.rightAvatarContainer}>
              <View style={styles.leftAvatarContainer}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.leftAvatar}
                />
              </View>
              <Text style={styles.username}>{item.username}</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsFollowing(isFollowing => !isFollowing)}
              >
                <Text style={styles.followButton}>
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={styles.caption}>{item.caption}</Text>
          <View style={styles.audioContainer}>
            <Ionic
              name="musical-notes-outline"
              style={[styles.icon, styles.iconSmall]}
            />
            <Text style={[styles.colorWhite, { fontSize: 10 }]}>
              Original Audio
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => setIsLiked(isLiked => !isLiked)}
          style={styles.smallPadding}
        >
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            style={[styles.icon, { color: isLiked ? "red" : "white" }]}
          />
          <Text style={styles.colorWhite}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallPadding}>
          <Ionic name="chatbubble-outline" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallPadding}>
          <Ionic name="paper-plane-outline" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallPadding}>
          <Feather name="more-vertical" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.avatarRightContainer}>
          <Image style={styles.avatarRight} source={{ uri: item.avatar }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallPadding: { padding: 10 },
  colorWhite: { color: "white" },
  actionsContainer: { position: "absolute", bottom: 80, right: 0 },
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    position: "absolute",
    width: SCREEN_WIDTH,
    zIndex: 1,
    bottom: 80,
    padding: 10,
  },
  icon: { color: "white", fontSize: 25 },
  iconSmall: { fontSize: 12, marginRight: 8 },
  avatarRightContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
  },
  avatarRight: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  videoContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  leftAvatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: "white",
    margin: 10,
  },
  leftAvatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  muteIcon: {
    color: "white",
    position: "absolute",
    backgroundColor: "rgba(52,52,52,0.6)",
    borderRadius: 100,
  },
  username: { color: "white", fontSize: 14, fontWeight: "bold" },
  caption: { color: "white", fontSize: 14, marginHorizontal: 10 },
  rightAvatarContainer: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  audioContainer: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 13,
    margin: 10,
    backgroundColor: "rgba(84, 84, 84, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "auto",
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  followButton: {
    color: "white",
    fontSize: 12,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 14,
    marginLeft: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default Reel;
