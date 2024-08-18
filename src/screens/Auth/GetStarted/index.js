import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Images } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';

const GetStarted = () => {
  return (
    <Layout showNavBar={false}>
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <CustomButton title={'Giriş Yap'} />
        <CustomButton
          title={'Kayıt Ol'}
          customStyle={styles.button}
          color={colors.primaryColor}
        />
      </View>
    </Layout>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 150,
    alignSelf: 'center',
    marginBottom: 60,
  },
  button: {
    backgroundColor: colors.white,
  },
});
