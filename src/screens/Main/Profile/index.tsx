import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useFetchSearchImages } from "@hooks/api/usePostsApi";

import Header from "./Header";
import Info from "./Info";
import ProfileButtons from "./ProfileButtons";

import Highlights from "../../../components/AvatarList";
import Layout from "../../../components/Layout";
import { useWindowDimensions } from "react-native";
import { ImageObject } from "../Search";

const Profile = () => {
  const layout = useWindowDimensions();

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const { data: images } = useFetchSearchImages();

  const Images = () => {
    const renderImages = (image: ImageObject) => {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={{ uri: image.url }}
            style={{
              width: layout.width / 3,
              height: layout.height / 3,
              borderColor: "white",
              borderWidth: 0.3,
            }}
          />
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={images}
        renderItem={({ item }) => renderImages(item)}
        bounces={false}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    );
  };

  const renderScene = SceneMap({
    posts: Images,
    tagged: Images,
  });

  const [routes] = useState([
    { key: "posts", title: "Posts" },
    { key: "tagged", title: "Tagged" },
  ]);

  return (
    <Layout>
      <View>
        <Header />
        <Info />
        <ProfileButtons />
        <Highlights isProfilePage />
      </View>
      <TabView
        renderTabBar={props => (
          <TabBar
            style={{ backgroundColor: "black" }}
            indicatorStyle={{ backgroundColor: "white" }}
            renderLabel={() => null}
            renderIcon={({ route, focused }) => (
              <IonIcon
                style={{ color: focused ? "white" : "grey", fontSize: 22 }}
                name={route.key == "posts" ? "apps-outline" : "people-outline"}
              />
            )}
            {...props}
          />
        )}
        navigationState={{ index: selectedTabIndex, routes }}
        renderScene={renderScene}
        onIndexChange={setSelectedTabIndex}
        initialLayout={{ width: layout.width }}
      />
    </Layout>
  );
};

export default Profile;
