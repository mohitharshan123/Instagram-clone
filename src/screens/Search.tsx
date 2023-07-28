import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Layout from "@components/Layout";
import { useFetchSearchImages } from "@hooks/api/usePostsApi";
import Animated from "react-native-reanimated";
import { HEADER_HEIGHT } from "@components/InstagramHeader";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "@constants";

export type ImageObject = {
  id: string;
  url: string;
};

const Search = () => {
  const { data: images } = useFetchSearchImages();
  const renderImages = (image: ImageObject) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          source={{ uri: image.url }}
          style={{
            width: SCREEN_WIDTH / 3,
            height: SCREEN_HEIGHT / 3,
            borderColor: "black",
            borderWidth: 0.3,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      <Animated.FlatList
        data={images}
        renderItem={({ item }) => renderImages(item)}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT,
        }}
        contentInset={{ top: HEADER_HEIGHT }}
        progressViewOffset={HEADER_HEIGHT}
        bounces={false}
        numColumns={3}
      />
    </Layout>
  );
};

export default Search;
