import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Layout from "@components/Layout";
import { useFetchSearchImages } from "@hooks/api/usePostsApi";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { HEADER_HEIGHT } from "@screens/Home/InstagramHeader";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "@constants";
import TopBar from "./Topbar";
import { clamp } from "utils";

export type ImageObject = {
  id: string;
  url: string;
};

const Search = () => {
  const { data: images } = useFetchSearchImages();

  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event, ctx: any) => {
      const diff = event.contentOffset.y - ctx.prevY;
      translationY.value = clamp(translationY.value + diff, -10, HEADER_HEIGHT);
      ctx.prevY = event.contentOffset.y;
    },
    onBeginDrag: (event, ctx: any) => {
      ctx.prevY = event.contentOffset.y;
    },
  });

  const renderImages = (image: ImageObject) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          source={{ uri: image.url }}
          style={{
            width: SCREEN_WIDTH / 3,
            height: SCREEN_HEIGHT / 3,
            borderColor: "white",
            borderWidth: 0.3,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      <TopBar scrollPosition={translationY} />
      <Animated.FlatList
        onScroll={scrollHandler}
        data={images}
        renderItem={({ item }) => renderImages(item)}
        bounces={false}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
};

export default Search;
