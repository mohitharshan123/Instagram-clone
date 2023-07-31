import React, { useState } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { REELS } from "./constants";
import Item from "./Item";

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={({ index }: { index: number }) => setCurrentIndex(index)}
      data={REELS}
      renderItem={({ item, index }) => (
        <Item {...{ item, index, currentIndex }} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default Content;
