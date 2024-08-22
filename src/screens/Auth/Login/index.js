import { useNavigation } from '@react-navigation/native';
import React from 'react';
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

const Login = () => {
  //

  const navigation = useNavigation();

  return (
    <Layout title={'Giriş Yap'}>
      <Image source={Images.logo} style={styles.logo} />
      <CustomInput
        label={'Email'}
        placeholder={'E-mail'}
        icon={<Icons name={'mail'} family={'AntDesign'} color={colors.grey1} />}
      />
      <CustomInput
        label={'Şifre'}
        placeholder={'Şifre'}
        icon={<Icons name={'lock'} family={'Feather'} color={colors.grey1} />}
        secureTextEntry
      />
      <CustomText
        label={'Şifreni mi unuttun ?'}
        fontFamily={fonts.medium}
        color={colors.green}
        containerStyle={styles.forgotText}
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <CustomButton
        title={'Giriş Yap'}
        onPress={() => navigation.navigate('MainStack')}
      />
      <SocialLogin />
      <View style={styles.row}>
        <CustomText label={'Hesabın yok mu ? '} fontFamily={fonts.semiBold} />
        <CustomText
          label={'Kayıt ol'}
          fontFamily={fonts.semiBold}
          color={colors.green}
          textDecorationLine={'underline'}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </Layout>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    height: 115,
    width: 80,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  forgotText: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
