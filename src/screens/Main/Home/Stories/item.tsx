import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { PostObject } from "../PostItem";

const Story: React.FC<{ story: PostObject }> = ({ story }) => {
  const { imageUrl, username, avatar } = story;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Image
          style={{ borderRadius: 40 }}
          width={80}
          height={80}
          source={{ uri: avatar }}
        />
      </View>
      <View style={styles.footer}>
        <IonIcon name="camera-outline" color="white" size={28} />
        <TextInput style={styles.input} />
        <IonIcon name="send-outline" color="white" size={28} />
      </View>
    </SafeAreaView>
  );
};
export default Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: "white",
    height: 28,
    width: 250,
    borderRadius: Platform.OS === "android" ? 0 : 10,
  },
});
