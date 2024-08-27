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
  bc,
  autoFocus,
  onSearchPress = () => '',
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={onSearchPress}
        disabled={disabled}
        style={[styles.container, { borderColor: bc || colors.lightGrey }]}>
        <TouchableOpacity onPress={onSearchPress}>
          <Icons
            name="search"
            type="feather"
            size={22}
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
          cursorColor={colors.green}
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
    height: 45,
    borderRadius: 19,
    borderWidth: 0.9,
    borderColor: colors.lightGrey,
    flex: 1,
    marginTop: 5,
    backgroundColor: colors.white,
  },
  input: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fonts.regular,
    flex: 1,
  },
});
