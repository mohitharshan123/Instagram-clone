import React, { useEffect } from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import Layout from "@components/Layout";
import PostItem from "@components/PostItem";
import { useFetchPosts } from "@hooks/api/usePostsApi";
import InstagramHeader, { HEADER_HEIGHT } from "@components/InstagramHeader";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { clamp } from "utils";

const Home: React.FC<any> = ({}) => {
  const { data: posts } = useFetchPosts();

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

  return (
    <Layout>
      <InstagramHeader scrollPosition={translationY} />
      <Animated.FlatList
        data={posts}
        renderItem={({ item }) => <PostItem post={item} />}
        onScroll={scrollHandler}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT,
        }}
        contentInset={{ top: HEADER_HEIGHT }}
        progressViewOffset={HEADER_HEIGHT}
        keyExtractor={item => item.id}
        bounces={false}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: { height: 50 },
  list: { marginTop: 50 },
});

export default Home;
