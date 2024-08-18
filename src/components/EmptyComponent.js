import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CustomText from './CustomText';
import { Images } from '../assets/images';
import fonts from '../assets/fonts';

const EmptyComponent = ({ title, style, imgStyle }) => (
  <View style={[styles.emptyComponent, style]}>
    <Image source={Images.noData} style={[styles.img, imgStyle]} />
    <CustomText
      label={title || 'No data found'}
      fontFamily={fonts.semiBold}
      fontSize={18}
    />
  </View>
);

export default EmptyComponent;

const styles = StyleSheet.create({
  emptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: { width: 200, height: 150, marginBottom: 10 },
});
