import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import fonts from '../../../assets/fonts';
import { Images } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';

const GetStarted = () => {
  //

  const navigation = useNavigation();
  const [selected, setSelected] = useState({
    email: false,
    terms: false,
  });
  return (
    <Layout showNavBar={false}>
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <CustomButton
          title={'Giriş Yap'}
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          title={'Kayıt Ol'}
          customStyle={styles.button}
          color={colors.primaryColor}
          onPress={() => navigation.navigate('Signup')}
        />
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() =>
              setSelected({ ...selected, email: !selected.email })
            }>
            {selected.email ? (
              <Icons
                name={'checkbox'}
                family={'IonIcons'}
                color={colors.green}
                size={24}
              />
            ) : (
              <Icons
                name={'check-box-outline-blank'}
                family={'MaterialIcons'}
                color={colors.green}
                size={24}
              />
            )}
          </TouchableOpacity>
          <CustomText
            label={
              'Supafo’nun e-posta adresimi ve adımı gizlilik politikasına uygun şekilde saklamasına izin veriyorum.'
            }
            fontSize={13}
            containerStyle={{ flex: 1 }}
            marginLeft={10}
            fontFamily={fonts.medium}
            marginTop={-2}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() =>
              setSelected({ ...selected, terms: !selected.terms })
            }>
            {selected.terms ? (
              <Icons
                name={'checkbox'}
                family={'IonIcons'}
                color={colors.green}
                size={24}
              />
            ) : (
              <Icons
                name={'check-box-outline-blank'}
                family={'MaterialIcons'}
                color={colors.green}
                size={24}
              />
            )}
          </TouchableOpacity>
          <View style={styles.row1}>
            <CustomText
              label={'Şartlar & Koşulları'}
              fontSize={13}
              fontFamily={fonts.medium}
              color={colors.green}
              onPress={() => ''}
              textDecorationLine={'underline'}
            />
            <CustomText
              label={' ve '}
              fontSize={13}
              fontFamily={fonts.medium}
            />
            <CustomText
              label={'Gizlilik Politikasani'}
              fontSize={13}
              fontFamily={fonts.medium}
              color={colors.green}
              onPress={() => ''}
              textDecorationLine={'underline'}
            />
            <CustomText
              label={' kabul ediyorum'}
              fontSize={13}
              fontFamily={fonts.medium}
            />
          </View>
        </View>
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
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginTop: -2,
  },
});
