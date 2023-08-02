import Layout from "@components/Layout";
import * as React from "react";
import { createRef, RefObject, useEffect } from "react";
import { StyleSheet, Animated, Dimensions, Platform, View } from "react-native";

import Story from "./item";

import { PostObject } from "../PostItem";
import { useFetchPosts } from "@hooks/api/usePostsApi";

const { width } = Dimensions.get("window");
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === "ios" ? 2 : 1.2;

const Stories: React.FC<{ stories: Array<PostObject> }> = () => {
  const { data: stories } = useFetchPosts();
  const x = new Animated.Value(0);
  const storiesRef = stories?.map(createRef);

  useEffect(() => {
    x.addListener(() =>
      storiesRef?.forEach((story: RefObject<any>, index: number) => {
        const offset = index * width;
        const inputRange = [offset - width, offset + width];
        const translateX = x
          .interpolate({
            inputRange,
            outputRange: [width / ratio, -width / ratio],
            extrapolate: "clamp",
          })
          .__getValue();

        const rotateY = x
          .interpolate({
            inputRange,
            outputRange: [`${angle}rad`, `-${angle}rad`],
            extrapolate: "clamp",
          })
          .__getValue();

        const parsed = parseFloat(
          rotateY.substr(0, rotateY.indexOf("rad")),
          10
        );
        const alpha = Math.abs(parsed);
        const gamma = angle - alpha;
        const beta = Math.PI - alpha - gamma;
        const w = width / 2 - ((width / 2) * Math.sin(gamma)) / Math.sin(beta);
        const translateX2 = parsed > 0 ? w : -w;

        const style = {
          transform: [
            { perspective },
            { translateX },
            { rotateY },
            { translateX: translateX2 },
          ],
        };
        story.current?.setNativeProps({ style });
      })
    );
  }, [x, stories]);

  return (
    <Layout>
      {stories
        .map((story: PostObject, i: number) => (
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
        snapToInterval={width}
        contentContainerStyle={{ width: width * stories.length }}
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
