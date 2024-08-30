import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import CustomInput from '../../../components/CustomInput';
import { colors } from '../../../utils/colors';
import CustomText from '../../../components/CustomText';
import fonts from '../../../assets/fonts';
import Currency from '../../../assets/images/Currency';
import CustomButton from '../../../components/CustomButton';
import PrivacyModal from '../../../components/PrivacyModal';

const Cart = () => {
  //

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  return (
    <Layout
      title={'Online Ödeme'}
      isScroll={false}
      layoutContainer={{ paddingHorizontal: 0 }}
      rightIcon={
        <TouchableOpacity
          style={styles.rightBox}
          onPress={() => navigation.navigate('Cart')}>
          <Icons name={'shopping-cart'} family={'Feather'} />
        </TouchableOpacity>
      }>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ph}>
          <CustomInput label={'Kart No'} placeholder={'0000 1111 2222 3333'} />
          <View style={[styles.row, { marginTop: 5, marginBottom: 40 }]}>
            <View>
              <CustomText
                label="Son Kullanma Tarihi"
                fontFamily={fonts.medium}
                fontSize={14}
                marginBottom={10}
              />
              <View style={styles.row1}>
                <TouchableOpacity style={styles.picker}>
                  <CustomText label={'Ay'} />
                  <Icons name={'chevron-down'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.picker}>
                  <CustomText label={'Yıl'} />
                  <Icons name={'chevron-down'} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <CustomText
                label="CVC"
                fontFamily={fonts.medium}
                fontSize={14}
                marginBottom={10}
              />
              <View style={styles.row1}>
                <CustomInput
                  containerStyle={styles.cvc}
                  keyboardType="numeric"
                />
                <TouchableOpacity style={styles.info}>
                  <Icons
                    name={'question'}
                    family={'AntDesign'}
                    color={colors.orange}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.box, styles.row, { marginBottom: 20 }]}>
          <CustomText
            label="Kredi Kartı Bilgilendirme"
            fontFamily={fonts.medium}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setVisible(true)}>
            <Icons
              name="questioncircle"
              family="AntDesign"
              color={colors.green}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ph}>
          <CustomInput
            label={'Sipariş Notu'}
            multiline
            containerStyle={{ height: 90 }}
          />
          <CustomText
            label={'Hesap Özeti'}
            fontFamily={fonts.medium}
            marginBottom={5}
            marginTop={30}
          />
          <View style={styles.billBox}>
            <View style={styles.row}>
              <CustomText label={'Tutar'} fontSize={13} />
              <View style={styles.row1}>
                <Currency color="#000" />
                <CustomText label={'400'} fontSize={13} />
              </View>
            </View>
            <View style={[styles.row, { marginTop: 10 }]}>
              <CustomText label={'İndirim'} fontSize={13} />
              <View style={styles.row1}>
                <Currency color="#000" />
                <CustomText label={'100'} fontSize={13} />
              </View>
            </View>
            <View style={styles.line} />
            <View style={styles.row}>
              <CustomText label={'Toplam'} fontSize={13} />
              <View style={styles.row1}>
                <Currency color="#000" />
                <CustomText label={'500'} fontSize={13} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBox}>
        <View style={[styles.row, { marginBottom: 30, marginTop: 20 }]}>
          <View style={styles.circle} />
          <View style={styles.agreeTxt}>
            <CustomText
              label={'Ön Bilgilendirme Formu’nu'}
              textDecorationLine={'underline'}
              color={colors.green}
              fontSize={12}
              onPress={() => ''}
            />
            <CustomText label={' ve '} fontSize={12} />
            <CustomText
              label={'Mesafeli Satış sözleşmesi’ni'}
              textDecorationLine={'underline'}
              color={colors.green}
              fontSize={12}
              onPress={() => ''}
            />
            <CustomText label={' okudum, kabul ediyorum.'} fontSize={12} />
          </View>
        </View>
        <CustomButton
          title={'Onayla Ve Bitir'}
          onPress={() => navigation.navigate('OrderDelivered')}
        />
      </View>
      <PrivacyModal visible={visible} setVisible={setVisible} />
    </Layout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  rightBox: {
    position: 'absolute',
    padding: 5,
    right: 20,
  },
  ph: {
    paddingHorizontal: 22,
  },
  box: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  row1: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  line: {
    height: 1,
    backgroundColor: colors.green,
    width: '100%',
    marginVertical: 15,
  },
  billBox: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  bottomBox: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingTop: 15,
    borderColor: '#00000033',
    borderBottomWidth: 0,
  },
  circle: {
    borderWidth: 1,
    borderRadius: 30,
    width: 15,
    height: 15,
    borderColor: colors.green,
  },
  agreeTxt: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignSelf: 'flex-start',
    borderRadius: 15,
    paddingHorizontal: 15,
    width: 90,
    marginRight: 10,
    height: 40,
  },
  info: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 5,
    borderRadius: 50,
  },
  cvc: {
    width: 100,
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 8,
    marginBottom: 0,
  },
});
