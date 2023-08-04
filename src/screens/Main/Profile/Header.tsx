import { DropdownIcon, Messenger } from "../../../../assets";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import IonIcon from "react-native-vector-icons/Ionicons";
import { GLOBAL_STYLES } from "styles";

import { HEADER_HEIGHT } from "../Home/InstagramHeader";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <IonIcon style={styles.leftIcon} name="lock-closed-outline" />
        <Text style={styles.username}>mohitharshan</Text>
        <DropdownIcon style={{ marginTop: 5, fontWeight: "bold" }} />
      </View>
      <View style={[styles.rightContainer]}>
        <TouchableOpacity activeOpacity={0.8}>
          <IonIcon name="at-outline" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <IonIcon name="add-circle-outline" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <IonIcon name="apps-outline" style={styles.rightIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
    alignItems: "center",
    height: HEADER_HEIGHT,
    backgroundColor: "#161616",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 10,
    height: "100%",
    padding: 2,
    marginTop: 5,
  },
  rightContainer: { display: "flex", flexDirection: "row", gap: 20 },
  leftIcon: { color: "white", fontSize: 20, marginTop: 8 },
  rightIcon: { color: "white", fontSize: 28 },
  username: { ...GLOBAL_STYLES.dark.username.bold, fontSize: 24 } as ViewStyle,
});

export default Header;
