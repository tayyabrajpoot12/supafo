/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import fonts from '../assets/fonts';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import { Images } from '../assets/images';

const HealthModal = ({ visible, setVisible }) => {
  const hideModal = () => setVisible(false);
  return (
    <Modal
      visible={visible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      style={{ margin: 0 }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image source={Images.ingrediant} style={styles.img} />
          <CustomText
            label={'Sağlığınız Bizim için Önemli'}
            alignSelf={'center'}
            fontFamily={fonts.semiBold}
            marginBottom={20}
          />
          <CustomText
            label={
              'Sürpriz paketimizin içeriği her zaman gizemli olduğu için önceden belirtmek mümkün değildir. Mağazamız, özel bir seçki ile paketinizi dolduracaktır. Alerjenler veya belirli içeriklerle ilgili sorularınız varsa, lütfen mağazaya sorun veya ödeme sayfasında sipariş notu olarak belirtiniz.'
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
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default HealthModal;

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
    paddingVertical: 18,
  },
  img: {
    width: 280,
    height: 50,
    resizeMode: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
