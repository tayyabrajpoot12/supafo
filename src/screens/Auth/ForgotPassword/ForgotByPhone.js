import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LockIcon } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import Layout from '../../../components/Layout';
import PhoneNumberInput from '../../../components/PhoneNumberInput';

const ForgotByPhone = () => {
  const navigation = useNavigation();

  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    phoneNumber: '',
  });

  return (
    <Layout title={'Şifre Sıfırlama'}>
      <View style={styles.icon}>
        <LockIcon />
      </View>
      <PhoneNumberInput
        valid={valid}
        setValid={setValid}
        formData={data}
        setValue={setData}
        value={data.phoneNumber}
      />
      <CustomButton
        title={'Kod Gönder'}
        customStyle={styles.btn}
        onPress={() => navigation.navigate('VerifyOtp')}
      />
    </Layout>
  );
};

export default ForgotByPhone;

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
