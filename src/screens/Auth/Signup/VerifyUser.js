import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';

import fonts from '../../../assets/fonts';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import OTPComponent from '../../../components/OTP';
import { className } from '../../../global-styles';
import ApiRequest from '../../../services/ApiRequest';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../../store/reducer/usersSlice';

const VerifyUser = () => {
  //

  const { params } = useRoute();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    try {
      const dataToPost = {
        type: 'verify_code',
        user_id: params?.id,
        code: value,
      };

      setLoading(true);
      const res = await ApiRequest(dataToPost);
      if (res.data?.result) {
        dispatch(setUserToken(params?.id));
        navigation.reset({ index: 0, routes: [{ name: 'LocationAccess' }] });
      }
      setLoading(false);
    } catch (error) {
      console.log(error, 'err in verify user');
      setLoading(false);
    }
  };

  return (
    <Layout StatusBarBg="#fff">
      <CustomText
        label={'OTP Verfication'}
        fontFamily={fonts.bold}
        fontSize={20}
        marginTop={50}
      />
      <CustomText label={'We have sent a code to'} marginTop={10} />
      <CustomText
        label={params?.email}
        fontFamily={fonts.semiBold}
        marginBottom={25}
        fontSize={16}
      />
      <OTPComponent value={value} setValue={setValue} />
      <CustomButton
        title={'Continue'}
        onPress={handlePress}
        customStyle={className('my-7')}
        loading={loading}
        disabled={value?.length < 4 || loading}
      />
      <View style={className('align-self flex')}>
        <CustomText label={'Send code again in  '} fontFamily={fonts.medium} />
        <CustomText label={'00:25'} fontFamily={fonts.semiBold} />
        {/* <CustomText label={'Resend'} fontFamily={fonts.semiBold} /> uncomment this when you will set timer */}
      </View>
    </Layout>
  );
};

export default VerifyUser;
