import { RefObject } from "react";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";

import { PostObject } from "../PostItem";

const useStoryAnimation = ({
  x,
  stories,
  storiesRef,
}: {
  x: any;
  stories: PostObject[];
  storiesRef: RefObject<PostObject>[];
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const angle = Math.atan(SCREEN_WIDTH / (SCREEN_WIDTH / 2));
  const perspective = SCREEN_WIDTH;
  const ratio = 1.2;
  useEffect(() => {
    x.addListener(() =>
      storiesRef?.forEach((story: RefObject<any>, index: number) => {
        const offset = index * SCREEN_WIDTH;
        const inputRange = [offset - SCREEN_WIDTH, offset + SCREEN_WIDTH];
        const translateX = x
          .interpolate({
            inputRange,
            outputRange: [SCREEN_WIDTH / ratio, -SCREEN_WIDTH / ratio],
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

        const parsed = parseFloat(rotateY.substr(0, rotateY.indexOf("rad")), 8);
        const alpha = Math.abs(parsed);
        const gamma = angle - alpha;
        const beta = Math.PI - alpha - gamma;
        const w =
          SCREEN_WIDTH / 2 -
          ((SCREEN_WIDTH / 2) * Math.sin(gamma)) / Math.sin(beta);
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
};

export default useStoryAnimation;
