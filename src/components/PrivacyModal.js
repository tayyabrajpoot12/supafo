/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import fonts from '../assets/fonts';
import { colors } from '../utils/colors';
import CustomText from './CustomText';

const msg =
  'Değerli Kullanıcımız,Güvenliğiniz ve gizliliğiniz bizim için en önemli önceliktir. Bu nedenle, kredi kartı bilgilerinizi saklamamayı tercih ediyoruz. Kredi kartı bilgilerinizi saklamayarak, kişisel ve finansal bilgilerinizin güvenliğini en üst düzeyde tutmayı amaçlıyoruz. Kredi kartı işlemleriniz, güvenli ve şifreli bağlantılar üzerinden ödeme hizmeti sağlayıcılarımız tarafından gerçekleştirilir. Bu sayede, bilgileriniz sadece işlem anında kullanılır ve saklanmaz. Bu yaklaşımımızla, siz değerli kullanıcılarımızın güvenini kazanmayı ve verilerinizi korumayı hedefliyoruz. Anlayışınız ve desteğiniz için teşekkür ederiz.';

const PrivacyModal = ({ visible, setVisible }) => {
  const hideModal = () => setVisible(false);
  return (
    <Modal
      visible={visible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      style={{ margin: 0 }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <CustomText
            label={'Gizliliğiniz ve Güvenliğiniz Önceliğimizdir'}
            alignSelf={'center'}
            fontFamily={fonts.semiBold}
            marginBottom={20}
            marginTop={30}
          />
          <CustomText
            label={msg}
            alignSelf={'center'}
            textAlign={'center'}
            fontSize={13}
            marginBottom={30}
            paddingHorizontal={30}
            fontFamily={fonts.medium}
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

export default PrivacyModal;

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
});
