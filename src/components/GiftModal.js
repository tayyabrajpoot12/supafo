/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import fonts from '../assets/fonts';
import { Images } from '../assets/images';
import { colors } from '../utils/colors';
import CustomText from './CustomText';

const GiftModal = ({ visible, setVisible }) => {
  const hideModal = () => setVisible(false);
  return (
    <Modal
      visible={visible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      style={{ margin: 0 }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image source={Images.gift} style={styles.img} />
          <CustomText
            label={'Senin için Hediyemiz'}
            alignSelf={'center'}
            fontFamily={fonts.semiBold}
            marginBottom={20}
          />
          <CustomText
            label={
              'Mağaza, yiyecekleriniz için ambalaj sağlayacaktır. Bu ürünleri taşıman ve diğer alışverişlerinde de kullanabilmen için Supafo bez çanta HEDİYE!'
            }
            alignSelf={'center'}
            textAlign={'center'}
            fontSize={12}
            marginBottom={30}
            paddingHorizontal={30}
          />
          <View style={styles.bottom}>
            <CustomText
              label={'Anladım'}
              fontFamily={fonts.semiBold}
              color={colors.green}
              alignSelf={'center'}
              onPress={hideModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GiftModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000009E',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 10,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.green,
    paddingVertical: 12,
  },
  img: {
    width: 90,
    height: 90,
    resizeMode: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
