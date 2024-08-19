import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import fonts from '../assets/fonts';
import { colors } from '../utils/colors';
import CustomText from './CustomText';

const PhoneNumberInput = ({ value, setValue, valid, setValid, formData }) => {
  const phoneInput = useRef(null);

  const checkPhoneNumber = text => {
    const sanitizedText = text.replace(/[^0-9+]/g, '');
    const checkValid = phoneInput.current?.isValidNumber(sanitizedText);
    setValid(checkValid);
    phoneInput.current?.setState({
      number: sanitizedText,
    });
    setValue({ ...formData, phoneNumber: sanitizedText });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <CustomText label={'Ülke'} fontFamily={fonts.medium} marginBottom={5} />
        <CustomText
          label={'Telefon Numarası'}
          fontFamily={fonts.medium}
          marginBottom={5}
        />
      </View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        value={value}
        defaultCode="TR"
        layout="second"
        placeholder={'Phone number'}
        withDarkTheme
        containerStyle={styles.containerStyle}
        textContainerStyle={styles.textContainerStyle}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
        onChangeText={text => {
          checkPhoneNumber(text);
        }}
        countryPickerButtonStyle={styles.countryPickerButtonStyle}
        disableArrowIcon
        onChangeFormattedText={text => {
          const sanitizedText = text.replace(/[^0-9+]/g, '');
          setValue({ ...formData, phoneNumber: sanitizedText });
        }}
        countryPickerProps={{ withAlphaFilter: false }}
      />
      {value && !valid && (
        <Text style={styles.error}>Geçerli bir telefon numarası girin</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    marginBottom: 10,
  },

  error: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.red,
    marginTop: 3,
  },
  containerStyle: {
    backgroundColor: colors.white,
    width: '100%',
    height: 45,
    borderRadius: 20,
  },
  textContainerStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 19,
  },
  textInputStyle: {
    fontFamily: fonts.medium,
    height: 45,
    color: colors.black,
    fontSize: 16,
  },
  codeTextStyle: {
    fontSize: 15,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  countryPickerButtonStyle: {
    borderRightColor: colors.lightGrey,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
    marginRight: 13,
    borderRadius: 19,
    height: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '65%',
  },
});

export default PhoneNumberInput;
