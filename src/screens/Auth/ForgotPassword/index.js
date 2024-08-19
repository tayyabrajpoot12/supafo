import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ForgotIcon } from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <Layout title={'Sıfırlama Yöntemi Seç'}>
      <View style={styles.container}>
        <ForgotIcon marginBottom={100} />
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ForgotByEmail')}>
          <Icons
            name={'mail'}
            family={'IonIcons'}
            color={colors.green}
            size={20}
          />
          <CustomText label={'Email ile doğrula'} marginLeft={5} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ForgotByPhone')}>
          <Icons
            name={'sms'}
            family={'FontAwesome5'}
            color={colors.green}
            size={20}
          />
          <CustomText label={'SMS ile doğrula'} marginLeft={5} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: colors.green,
    borderRadius: 18,
    paddingVertical: 10,
    marginVertical: 20,
  },
});
