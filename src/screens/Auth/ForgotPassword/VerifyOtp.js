import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';

import fonts from '../../../assets/fonts';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import OTPComponent from '../../../components/OTP';
import { className } from '../../../global-styles';

const VerifyOtp = () => {
  //

  const { params } = useRoute();
  const navigation = useNavigation();

  const [value, setValue] = useState('');

  return (
    <Layout StatusBarBg="#fff">
      <CustomText
        label={'OTP Verfication'}
        fontFamily={fonts.bold}
        fontSize={22}
        marginTop={10}
      />
      <CustomText
        label={'We have sent a code to'}
        marginTop={10}
        fontSize={16}
      />
      <CustomText
        label={params?.email}
        fontFamily={fonts.semiBold}
        marginBottom={25}
        fontSize={16}
      />
      <OTPComponent value={value} setValue={setValue} />
      <CustomButton
        title={'Continue'}
        onPress={() => navigation.navigate('NewPassword')}
        customStyle={className('my-7')}
        disabled={value?.length < 4}
      />
      <View style={className('align-self flex')}>
        <CustomText label={'Send code again in  '} fontFamily={fonts.medium} />
        <CustomText label={'00:25'} fontFamily={fonts.semiBold} />
      </View>
    </Layout>
  );
};

export default VerifyOtp;
