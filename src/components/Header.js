import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import fonts from '../assets/fonts';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import Icons from './Icons';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}>
        <Icons name="arrow-left" size={24} family={'Feather'} />
      </TouchableOpacity>
      <View style={styles.textBox}>
        <CustomText label={title} fontFamily={fonts.medium} fontSize={18} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    zIndex: 1,
  },
  arrowBtn: {
    zIndex: 1,
    padding: 8,
    position: 'absolute',
    left: 15,
  },
  textBox: {
    flex: 1,
    alignItems: 'center',
  },
});
