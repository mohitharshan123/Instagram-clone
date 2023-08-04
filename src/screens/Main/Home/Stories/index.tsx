import Layout from "@components/Layout";
import * as React from "react";
import { createRef, useMemo } from "react";
import { StyleSheet, Animated } from "react-native";

import Story from "./item";

import { PostObject } from "../PostItem";
import { useFetchPosts } from "@hooks/api/usePostsApi";
import useStoryAnimation from "./useStoryAnimation";
import { useWindowDimensions } from "react-native";

const Stories: React.FC<{ stories: Array<PostObject> }> = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const { data: stories } = useFetchPosts();
  const storiesRef = useMemo(() => stories?.map(createRef), [stories]);

  const x = new Animated.Value(0);
  useStoryAnimation({ x, stories, storiesRef });

  return (
    <Layout>
      {stories
        ?.map((story: PostObject, i: number) => (
          <Animated.View
            ref={storiesRef[i]}
            style={StyleSheet.absoluteFill}
            key={story.id}
          >
            <Story {...{ story }} />
          </Animated.View>
        ))
        .reverse()}
      <Animated.ScrollView
        style={StyleSheet.absoluteFillObject}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={SCREEN_WIDTH}
        contentContainerStyle={{ width: SCREEN_WIDTH * stories?.length }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        decelerationRate={0.99}
        horizontal
      />
    </Layout>
  );
};

export default Stories;
