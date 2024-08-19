import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LockIcon } from '../../../assets/images';
import CustomInput from '../../../components/CustomInput';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotByEmail = () => {
  const navigation = useNavigation();
  return (
    <Layout title={'Şifre Sıfırlama'}>
      <View style={styles.icon}>
        <LockIcon />
      </View>
      <CustomInput
        label={'Email'}
        placeholder={'example@gmail.com'}
        icon={<Icons name={'mail'} family={'AntDesign'} color={colors.grey1} />}
      />
      <CustomButton
        title={'Kod Gönder'}
        customStyle={styles.btn}
        onPress={() => navigation.navigate('VerifyOtp')}
      />
    </Layout>
  );
};

export default ForgotByEmail;

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 70,
  },
  btn: {
    marginTop: 50,
    marginBottom: 20,
  },
});
