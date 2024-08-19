import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import { AppleIcon, FbIcon, GoogleIcon } from '../assets/images';

const SocialLogin = ({ onGoogle, onApple, onFb }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.line} />
        <CustomText label={'OR'} marginLeft={10} marginRight={10} />
        <View style={styles.line} />
      </View>
      <View style={styles.row1}>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={onGoogle}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.5}
          onPress={onApple}>
          <AppleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} activeOpacity={0.5} onPress={onFb}>
          <FbIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.grey,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    marginRight: 10,
    paddingHorizontal: 8,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
