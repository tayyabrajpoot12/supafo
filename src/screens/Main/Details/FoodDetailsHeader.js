import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import { colors } from '../../../utils/colors';
import fonts from '../../../assets/fonts';

const IconButton = ({ name, family, color, style }) => (
  <TouchableOpacity style={[styles.icon, style]} activeOpacity={0.5}>
    <Icons name={name} family={family} color={color} />
  </TouchableOpacity>
);

const FoodDetailsHeader = () => (
  <ImageBackground source={Images.food1} style={styles.imgBox}>
    <View style={styles.backdrop} />
    <View style={styles.innerBox}>
      <View style={styles.row}>
        <IconButton name="arrowleft" family="AntDesign" />
        <View style={styles.row1}>
          <IconButton
            name="share-google"
            family="EvilIcons"
            color={colors.green}
          />
          <IconButton
            name="bag-outline"
            family="IonIcons"
            color={colors.primaryColor}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row1}>
          <Image source={Images.company2} style={styles.logo} />
          <CustomText
            label="Burger King"
            fontFamily={fonts.semiBold}
            color="#fff"
          />
        </View>
        <IconButton name="heart" family="IonIcons" color={colors.orange} />
      </View>
    </View>
  </ImageBackground>
);

export default FoodDetailsHeader;

const styles = StyleSheet.create({
  imgBox: {
    height: 200,
    width: '100%',
  },
  backdrop: {
    backgroundColor: '#0000005E',
    zIndex: 1,
    width: '100%',
    height: 200,
    position: 'absolute',
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 100,
    width: 30,
    height: 30,
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
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  innerBox: {
    zIndex: 2,
    padding: 20,
    paddingBottom: 10,
    justifyContent: 'space-between',
    height: 200,
  },
});
