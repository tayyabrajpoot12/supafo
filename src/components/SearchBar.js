/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import fonts from '../assets/fonts';
import { colors } from '../utils/colors';
import Icons from './Icons';

const SearchBar = ({
  placeHolder,
  value,
  onChangeText,
  onEndEditing,
  editable,
  onFocus,
  disabled,
  autoFocus,
  home,
  marginTop,
  containerStyle,
  marginBottom,
  onSearchPress = () => '',
  width,
}) => {
  return (
    <View
      style={[
        {
          width: width || '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: marginTop,
          marginBottom: marginBottom,
          // justifyContent: 'center',
        },
        containerStyle,
      ]}>
      <Pressable
        onPress={onSearchPress}
        disabled={disabled}
        style={[styles.container, { width: home ? '80%' : '100%' }]}>
        <TouchableOpacity onPress={onSearchPress}>
          <Icons
            name="search"
            type="feather"
            size={24}
            color={colors.primaryColor}
          />
        </TouchableOpacity>
        <TextInput
          autoFocus={autoFocus}
          editable={editable}
          onFocus={onFocus}
          placeholder={placeHolder}
          placeholderTextColor={colors.grey}
          style={styles.input}
          value={value}
          cursorColor={colors.black}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    height: 48,
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: colors.lightGrey,
  },
  input: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fonts.regular,
    flex: 1,
    top: 2,
  },
});
