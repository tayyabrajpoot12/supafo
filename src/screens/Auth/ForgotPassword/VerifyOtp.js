import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import fonts from '../../../assets/fonts';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import OTPComponent from '../../../components/OTP';

const VerifyOtp = () => {
  //

  const navigation = useNavigation();

  const [value, setValue] = useState('');

  return (
    <Layout title={'Tek Seferlik Kod'}>
      <CustomText
        label={'Hesabı Doğrula'}
        fontFamily={fonts.medium}
        fontSize={18}
        marginTop={50}
        alignSelf={'center'}
      />
      <CustomText
        label={'Size gelen 6 haneli kodu girin.'}
        fontSize={12}
        alignSelf={'center'}
        marginBottom={60}
      />
      <OTPComponent value={value} setValue={setValue} />
      <View style={styles.timer}>
        <CustomText label={'Kodu tekrar gönder '} fontFamily={fonts.medium} />
        <CustomText label={'03:25'} fontFamily={fonts.semiBold} />
      </View>
      <CustomButton
        title={'Devam Et'}
        onPress={() => navigation.navigate('NewPassword')}
        customStyle={styles.btn}
      />
    </Layout>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  btn: {
    marginTop: 40,
    marginBottom: 20,
  },
  timer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
  },
});
