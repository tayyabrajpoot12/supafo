import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Layout from '../../../components/Layout';
import ProgressBar from '../../../components/ProgessBar';
import { colors } from '../../../utils/colors';
import CustomText from '../../../components/CustomText';
import fonts from '../../../assets/fonts';
import Currency from '../../../assets/images/Currency';
import Icons from '../../../components/Icons';
import { Images } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const OrderDelivered = () => {
  const navigation = useNavigation();
  return (
    <Layout title={'Sipariş Detayı'}>
      <ProgressBar index={3} />
      <View style={[styles.box, { marginTop: 40 }]}>
        <View style={styles.row}>
          <CustomText
            label={'Sipariş Detayı'}
            color={colors.green}
            fontSize={12}
            fontFamily={fonts.semiBold}
          />
          <CustomText
            label={'Sipariş Hazırlanıyor'}
            color={colors.green}
            fontSize={12}
            fontFamily={fonts.semiBold}
          />
        </View>
        <View style={styles.line} />
        <View style={[styles.row, { marginTop: 10, alignItems: 'flex-start' }]}>
          <View>
            <CustomText label={'26 Ağustos 2023 | 14:50'} fontSize={10} />
            <View style={[styles.row1, { marginTop: 5 }]}>
              <CustomText label={'Toplam: '} fontSize={12} />
              <View style={styles.row1}>
                <Currency color="#000" width={12} height={12} />
                <CustomText label={300} fontSize={12} />
              </View>
            </View>
          </View>
          <View style={styles.orderBox}>
            <Icons name={'bag-outline'} color={colors.orange} size={35} />
            <CustomText fontSize={10} label={'Burger King'} />
            <CustomText fontSize={10} label={'Süpriz paketi'} />
          </View>
          <View style={styles.orderBox}>
            <Icons name={'bag-outline'} color={colors.orange} size={35} />
            <CustomText fontSize={10} label={'Burger King'} />
            <CustomText fontSize={10} label={'Süpriz paketi'} />
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <CustomText
          label={'Sipariş Detayı'}
          color={colors.green}
          fontSize={12}
          fontFamily={fonts.semiBold}
        />
        <View style={styles.line} />
        <CustomText
          fontSize={12}
          label={'Yemekte pul biber, tatlı da gluten olmasın. Teşekkürler..'}
          marginTop={6}
          marginBottom={10}
        />
      </View>
      <View style={styles.circle}>
        <Image source={Images.logo} style={styles.img} />
      </View>
      <CustomButton
        title={'Sürpriz Paketi Değerlendir'}
        onPress={() => navigation.navigate('Success')}
      />
    </Layout>
  );
};

export default OrderDelivered;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 15,
    padding: 15,
    marginTop: 25,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.green,
    marginVertical: 5,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderBox: {
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  img: {
    width: 70,
    height: 95,
  },
  circle: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0D5DD1A',
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
});
