import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import fonts from '../../../assets/fonts';
import { Images } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';

const MessageBox = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.img} />
      <CustomText
        label={'Sepetinizde ürün bulunmamaktadır.'}
        fontFamily={fonts.medium}
        marginTop={50}
        fontSize={16}
        alignSelf={'center'}
        marginBottom={80}
      />
      <CustomButton title={'Sürpriz Paketleri Keşfet'} />
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: '20%',
  },
  img: {
    width: 150,
    height: 200,
    alignSelf: 'center',
  },
});
