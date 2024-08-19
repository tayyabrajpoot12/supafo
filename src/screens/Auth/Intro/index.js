import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import fonts from '../../../assets/fonts';
import { Images, Intro2, Intro3, Intro4 } from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import { setIntroSeen } from '../../../store/reducer/usersSlice';
import { colors } from '../../../utils/colors';

const { width } = Dimensions.get('window');

const Intro = () => {
  //

  const flatListRef = useRef();
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

  const array = [
    {
      id: 1,
      img: Images.intro1,
      title:
        'Kolayca üye olup Supafo’nun bir parçası olmaya hazır mısın? En uygun ürünleri takip ederek çevrendeki sürpriz paketlerin siparişini ver.',
    },
    {
      id: 2,
      img: Intro2,
      title:
        'Siparişlerim kısmında yer alan sana özel QR kod ile restorana gidebilir,',
    },
    {
      id: 3,
      img: Intro3,
      title:
        'Seçmiş olduğun süpriz paketini QR kodun ile kolayca teslim alabilirsin. Afiyet olsun :)',
    },
    {
      id: 4,
      img: Intro4,
      title:
        'Hem israfı önleyip hem de sipariş verdiğin ürünlerin teslimini almaya giderek çevre dostu yaşam tarzını kazandığın için seni tebrik ediyoruz.',
    },
  ];

  const handleBack = () => {
    setCurrentIndex(pre => parseInt(pre, 10) - 1);
  };

  const handleNext = () => {
    if (currentIndex == 3) {
      dispatch(setIntroSeen(true));
    } else {
      setCurrentIndex(pre => parseInt(pre, 10) + 1);
    }
  };

  useEffect(() => {
    flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Animated.FlatList
        data={array}
        showsHorizontalScrollIndicator={false}
        horizontal
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onScrollToIndexFailed={info => {
          console.error('Failed to scroll to index:', info.index);
        }}
        ref={flatListRef}
        onMomentumScrollEnd={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width)?.toFixed(0));
        }}
        initialScrollIndex={currentIndex}
        pagingEnabled
        renderItem={({ item }) => (
          <Animated.View style={styles.sliderItem}>
            <View style={{ height: 200, marginBottom: 30, marginTop: '50%' }}>
              {item.id === 1 ? (
                <Image source={item.img} style={styles.img} />
              ) : (
                <item.img />
              )}
            </View>
            <CustomText
              label={item.title}
              fontSize={15}
              marginBottom={20}
              textAlign="center"
              lineHeight={28}
              fontFamily={fonts.medium}
            />
          </Animated.View>
        )}
      />

      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleBack} disabled={currentIndex === 0}>
          <CustomText label={'Atla'} fontFamily={fonts.semiBold} />
        </TouchableOpacity>
        <Animated.View style={styles.dotContainer}>
          {array?.map((_, i) => (
            <Animated.View
              key={i}
              style={[i == currentIndex ? styles.activeDot : styles.dot]}
            />
          ))}
        </Animated.View>
        <TouchableOpacity onPress={handleNext}>
          <CustomText label={'Sonaraki'} fontFamily={fonts.semiBold} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderItem: {
    width: width,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  img: {
    height: 200,
    width: 200,
  },
  dot: {
    height: 10,
    marginHorizontal: 3,
    borderRadius: 100,
    width: 10,
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  activeDot: {
    height: 10,
    marginHorizontal: 3,
    borderRadius: 100,
    width: 10,
    backgroundColor: colors.primaryColor,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
});
