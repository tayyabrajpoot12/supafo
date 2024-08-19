import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ForgotSuccess } from '../../../assets/images';
import Layout from '../../../components/Layout';
import CustomText from '../../../components/CustomText';
import fonts from '../../../assets/fonts';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const PasswordSuccess = () => {
  const navigation = useNavigation();
  return (
    <Layout title={'Yeni Şifre Oluştur'} isBack={false}>
      <View style={styles.icon}>
        <ForgotSuccess />
      </View>
      <CustomText
        label={'Şifreniz Başarıyla Güncellendi !'}
        fontFamily={fonts.medium}
        fontSize={16}
        alignSelf={'center'}
        marginTop={10}
        marginBottom={40}
      />
      <CustomButton
        title={'Giriş Yap'}
        onPress={() => navigation.navigate('Login')}
      />
    </Layout>
  );
};

export default PasswordSuccess;

const styles = StyleSheet.create({
  icon: {
    marginTop: 80,
    marginBottom: 40,
    alignItems: 'center',
  },
});
