import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import Icons from './Icons';
import fonts from '../assets/fonts';

export const DatePicker = ({
  date,
  placeHolder,
  show,
  showDatepicker,
  onChange,
  maxDate,
  minDate,
  disable,
  customeStyle,
  isTime,
  error,
}) => {
  const isError = ![undefined, null, true, ''].includes(error);

  return (
    <>
      <TouchableOpacity
        onPress={showDatepicker}
        style={[styles.box, customeStyle]}
        disabled={disable}>
        <CustomText
          label={date || placeHolder}
          fontFamily={fonts.medium}
          fontSize={16}
        />
        <Icons
          name="calendar"
          family={'EvilIcons'}
          size={25}
          color={colors.black}
          top={-3}
        />
      </TouchableOpacity>
      {isError && <CustomText label={error} color={colors.red} />}
      {show && (
        <DateTimePicker
          display="spinner"
          mode={isTime ? 'time' : 'date'}
          value={new Date()}
          is24Hour={true}
          onChange={onChange}
          minimumDate={minDate ? minDate : null}
          maximumDate={maxDate ? maxDate : null}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  date: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.grey1,
  },
  box: {
    borderColor: '#D0D5DD',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 2,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
    height: 52,
    maxHeight: 52,
    flex: 1,
  },
});
