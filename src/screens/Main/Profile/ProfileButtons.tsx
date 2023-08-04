import { SCREEN_WIDTH } from "@constants/";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

const ProfileButtons: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.profileButtonsContainer}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Share profile</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
      <IonIcon name="person-add-outline" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 10, display: "flex", flexDirection: "row", gap: 10 },
  profileButtonsContainer: {
    width: SCREEN_WIDTH * 0.7,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#1c1c1c",
    paddingVertical: 7,
    borderRadius: 5,
    width: SCREEN_WIDTH * 0.38,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
  icon: { fontSize: 14, color: "white", fontWeight: "bold" },
  iconButton: {
    alignItems: "center",
    marginLeft: 25,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
    padding: 10,
    borderRadius: 5,
  },
});

export default ProfileButtons;
