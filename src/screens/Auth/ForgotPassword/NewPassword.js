import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Images } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';

const NewPassword = () => {
  const navigation = useNavigation();
  return (
    <Layout title={'Yeni Şifre Oluştur'}>
      <Image source={Images.logo} style={styles.logo} />
      <CustomInput
        label={'Şifre'}
        placeholder={'Şifre'}
        icon={<Icons name={'lock'} family={'Feather'} color={colors.grey1} />}
        secureTextEntry
      />
      <CustomInput
        label={'Şifre Tekrar'}
        placeholder={'Şifre'}
        icon={<Icons name={'lock'} family={'Feather'} color={colors.grey1} />}
        secureTextEntry
      />
      <View style={styles.box}>
        <View style={styles.row}>
          <View style={styles.circle} />
          <CustomText label={'6 ile 15 karakter arasında olmalıdır.'} />
        </View>
        <View style={styles.row}>
          <View style={styles.circle} />
          <CustomText label={'Büyük harf içermeli.'} />
        </View>
        <View style={styles.row}>
          <View style={styles.circle} />
          <CustomText label={'Rakam içermeli.'} />
        </View>
      </View>
      <CustomButton
        title={'Devam Et'}
        onPress={() => navigation.navigate('PasswordSuccess')}
      />
    </Layout>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  logo: {
    height: 115,
    width: 80,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.green,
    marginRight: 10,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 30,
    paddingVertical: 15,
    marginBottom: 40,
  },
});
