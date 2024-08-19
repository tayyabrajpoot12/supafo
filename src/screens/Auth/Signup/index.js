import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import fonts from '../../../assets/fonts';
import { Images } from '../../../assets/images';
import CustomInput from '../../../components/CustomInput';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';
import CustomButton from '../../../components/CustomButton';
import SocialLogin from '../../../components/SocialLogin';
import PhoneNumberInput from '../../../components/PhoneNumberInput';

const Signup = () => {
  //

  const navigation = useNavigation();
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    phoneNumber: '',
  });

  return (
    <Layout title={'Kayıt Ol'}>
      <Image source={Images.logo} style={styles.logo} />
      <CustomInput
        label={'Ad Soyad'}
        placeholder={'Ad Soyad'}
        icon={<Icons name={'user'} family={'Feather'} color={colors.grey1} />}
      />
      <CustomInput
        label={'Email'}
        placeholder={'E-mail'}
        icon={<Icons name={'mail'} family={'AntDesign'} color={colors.grey1} />}
      />
      <PhoneNumberInput
        valid={valid}
        setValid={setValid}
        formData={data}
        setValue={setData}
        value={data.phoneNumber}
      />
      <CustomInput
        label={'Şifre'}
        placeholder={'Şifre'}
        icon={<Icons name={'lock'} family={'Feather'} color={colors.grey1} />}
        secureTextEntry
      />
      <CustomButton title={'Kayıt Ol'} customStyle={styles.btn} />
      <SocialLogin />
      <View style={styles.row}>
        <CustomText label={'Hesabın var mı ? '} fontFamily={fonts.semiBold} />
        <CustomText
          label={'Giriş Yap'}
          fontFamily={fonts.semiBold}
          color={colors.green}
          textDecorationLine={'underline'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </Layout>
  );
};

export default Signup;

const styles = StyleSheet.create({
  logo: {
    height: 115,
    width: 80,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  btn: {
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
