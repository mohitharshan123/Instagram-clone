import {
  HEADER_HEIGHT,
  InstagramHeaderProps,
} from "@screens/Main/Home/InstagramHeader";
import {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { ViewStyle } from "react-native/types";

const useAnimatedHeader = ({
  scrollPosition,
}: Pick<InstagramHeaderProps, "scrollPosition">): ViewStyle => {
  const headerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollPosition.value,
      [0, HEADER_HEIGHT],
      [1, 0],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      scrollPosition.value,
      [0, HEADER_HEIGHT],
      [0, -HEADER_HEIGHT],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY }],
      opacity,
      zIndex: 10,
    };
  });

  return headerStyle;
};

export default useAnimatedHeader;
