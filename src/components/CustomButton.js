import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import CustomText from './CustomText';
import fonts from '../assets/fonts';
import { colors } from '../utils/colors';
import { StyleSheet } from 'react-native';

const CustomButton = ({
  onPress,
  title,
  disabled,
  loading,
  customStyle,
  backgroundColor,
  color,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: disabled
            ? colors.grey
            : backgroundColor
            ? backgroundColor
            : colors.primaryColor,
        },
        styles.button,
        customStyle,
      ]}
      onPress={onPress}>
      {loading && <ActivityIndicator size={25} color={colors.white} />}
      {!loading && (
        <CustomText
          label={title}
          color={color || colors.white}
          fontFamily={fonts.medium}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    borderRadius: 19,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
});
