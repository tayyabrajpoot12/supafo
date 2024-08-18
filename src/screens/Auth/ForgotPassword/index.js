import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import fonts from '../../../assets/fonts';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import { className } from '../../../global-styles';
import { colors } from '../../../utils/colors';
import { regEmail } from '../../../utils/constants';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const errorCheck = useMemo(() => {
    return () => {
      let newErrors = '';
      if (!email) newErrors = 'Please enter Email address';
      else if (!regEmail.test(email)) newErrors = 'Please enter valid email';
      setEmailError(newErrors);
    };
  }, [email]);
  useEffect(() => {
    errorCheck();
  }, [errorCheck]);

  return (
    <Layout
      StatusBarBg={colors.white}
      footerComponent={
        <View style={className('justify-center align-center flex mb-5')}>
          <CustomText
            label={'Remember password?'}
            fontSize={15}
            marginRight={5}
          />
          <CustomText
            label={'Sign in'}
            fontFamily={fonts.semiBold}
            fontSize={15}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      }>
      <CustomText
        label={'Forgot Password'}
        fontFamily={fonts.semiBold}
        fontSize={20}
        marginTop={50}
      />
      <CustomText
        label={
          'Please enter the email associated with your account to reset password.'
        }
        marginTop={5}
        marginBottom={25}
      />
      <CustomInput
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={text => setEmail(text)}
        error={emailError}
      />
      <CustomButton
        title={'Continue'}
        disabled={!!emailError}
        onPress={() =>
          navigation.navigate('VerifyOtp', { email: 'abc@gmail.com' })
        }
      />
    </Layout>
  );
};

export default ForgotPassword;
