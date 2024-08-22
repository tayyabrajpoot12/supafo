import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import fonts from '../assets/fonts';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import Icons from './Icons';
import { Images, Currency } from '../assets/images';

const FoodCard = ({ item, isLike }) => {
  return (
    <ImageBackground
      source={Images.food2}
      imageStyle={styles.img}
      style={styles.box}>
      <View style={styles.backdrop} />
      <View style={styles.innerBox}>
        <View style={styles.row}>
          <View style={styles.textBox}>
            <CustomText
              label={'Son 5'}
              color={'#fff'}
              fontFamily={fonts.semiBold}
              fontSize={10}
            />
          </View>
          <View style={styles.row1}>
            <TouchableOpacity style={styles.icon} activeOpacity={0.5}>
              <Icons
                name={isLike ? 'heart' : 'heart-o'}
                family={'FontAwesome'}
                color={colors.orange}
                size={14}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.icon, { paddingBottom: 4 }]}
              activeOpacity={0.5}>
              <Icons
                name={'share-google'}
                family={'EvilIcons'}
                color={colors.green}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.row1}>
            <Image source={Images.company1} style={styles.logo} />
            <CustomText
              label={'Kahvaltılık'}
              fontFamily={fonts.semiBold}
              color={colors.white}
            />
          </View>
          <View style={[styles.textBox, { marginVertical: 10 }]}>
            <CustomText
              label={'Bugün: 06:00-07:00'}
              color={'#fff'}
              fontFamily={fonts.semiBold}
              fontSize={10}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.row1}>
              <Icons name={'star'} color={colors.green} size={15} />
              <CustomText label={4.9} color={colors.white} fontSize={12} />
              <View style={styles.line} />
              <CustomText label={'1 KM'} color={colors.white} fontSize={12} />
            </View>
            <View style={styles.row1}>
              <Currency />
              <CustomText
                label={'89.90'}
                color={colors.white}
                fontFamily={fonts.semiBold}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  box: {
    height: 160,
    overflow: 'hidden',
    flex: 1,
    marginBottom: 15,
  },
  img: {
    borderRadius: 17,
    resizeMode: 'stretch',
  },
  backdrop: {
    backgroundColor: '#0000005E',
    zIndex: 1,
    width: '100%',
    height: 160,
    borderRadius: 17,
    position: 'absolute',
  },
  innerBox: {
    zIndex: 2,
    padding: 10,
    justifyContent: 'space-between',
    height: 160,
  },
  textBox: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 100,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  row1: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  logo: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  line: {
    backgroundColor: colors.white,
    height: 15,
    width: 1,
  },
});
