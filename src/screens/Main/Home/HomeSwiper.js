import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import FoodCard from '../../../components/FoodCard';
import { colors } from '../../../utils/colors';

const { width } = Dimensions.get('window');

const HomeSwiper = ({ data }) => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [data.length]);

  return (
    <View style={{}}>
      <Animated.FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onScrollToIndexFailed={info => {
          flatListRef.current.scrollToIndex({
            index: info.index,
            animated: true,
          });
        }}
        ref={flatListRef}
        onMomentumScrollEnd={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Math.round(x / width));
        }}
        initialScrollIndex={currentIndex}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width: width, paddingHorizontal: 20 }}>
              <FoodCard item={item} />
            </View>
          );
        }}
      />
      <View style={styles.dotContainer}>
        {data?.map((_, index) => (
          <View
            key={index}
            style={index === currentIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderItem: {
    width: width,
    height: 300,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  dot: {
    height: 8,
    marginHorizontal: 3,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.orange,
    padding: 3,
  },
  activeDot: {
    height: 8,
    marginHorizontal: 3,
    borderRadius: 20,
    width: 20,
    backgroundColor: colors.orange,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
});

export default HomeSwiper;
