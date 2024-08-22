import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Currency, Images } from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import fonts from '../../../assets/fonts';
import Icons from '../../../components/Icons';
import { colors } from '../../../utils/colors';

const HomeCard = ({ item, isLike }) => {
  return (
    <ImageBackground
      source={Images.food3}
      imageStyle={styles.img}
      style={styles.box}>
      <View style={styles.backdrop} />
      <View style={styles.innerBox}>
        <View style={styles.row}>
          <View style={styles.row1}>
            <View style={styles.textBox}>
              <CustomText
                label={'Son 5'}
                color={'#fff'}
                fontFamily={fonts.semiBold}
                fontSize={10}
              />
            </View>
            <View style={[styles.textBox, { backgroundColor: '#fff' }]}>
              <CustomText
                label={'Yeni'}
                color={colors.green}
                fontFamily={fonts.semiBold}
                fontSize={10}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.icon} activeOpacity={0.5}>
            <Icons
              name={isLike ? 'heart' : 'heart-o'}
              family={'FontAwesome'}
              color={colors.orange}
              size={14}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.row1}>
            <Image source={Images.company1} style={styles.logo} />
            <CustomText
              label={'Burger King'}
              fontFamily={fonts.semiBold}
              color={colors.white}
              fontSize={13}
            />
          </View>
          <View style={[styles.textBox, { marginTop: 10, marginBottom: 4 }]}>
            <CustomText
              label={'Bugün: 06:00-07:00'}
              color={'#fff'}
              fontFamily={fonts.semiBold}
              fontSize={8}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.row1}>
              <Icons name={'star'} color={colors.green} size={12} />
              <CustomText label={4.9} color={colors.white} fontSize={10} />
              <View style={styles.line} />
              <CustomText label={'1 KM'} color={colors.white} fontSize={10} />
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

export default HomeCard;

const styles = StyleSheet.create({
  box: {
    height: 160,
    marginBottom: 20,
    overflow: 'hidden',
    marginRight: 10,
    width: 250,
    elevation: 10,
  },
  img: {
    borderRadius: 13,
    resizeMode: 'stretch',
    width: '100%',
  },
  backdrop: {
    backgroundColor: '#0000005E',
    zIndex: 1,
    width: '100%',
    height: 160,
    borderRadius: 13,
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
    height: 12,
    width: 1,
  },
});
