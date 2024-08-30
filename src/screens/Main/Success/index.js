import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import fonts from '../../../assets/fonts';
import { Images } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';

const Success = () => {
  const navigation = useNavigation();
  return (
    <Layout showNavBar={false}>
      <View style={styles.container}>
        <Image style={styles.img} source={Images.success} />
        <View style={{ alignItems: 'center' }}>
          <CustomText
            label={
              'Değerlendirmeniz ilgili birime ulaştı! Bizi tercih ettiğiniz için'
            }
            fontFamily={fonts.medium}
            alignSelf={'center'}
            textAlign={'center'}
            paddingHorizontal={30}
          />
          <CustomText
            label={'Teşekkür Ederiz!'}
            color={colors.orange}
            fontFamily={fonts.semiBold}
            marginTop={10}
          />
        </View>
        <View>
          <CustomButton
            title={'Değerlendirmeler ve Yorumlar'}
            onPress={() => navigation.navigate('AddRating')}
          />
          <CustomButton
            title={'Ana Sayfaya Dön'}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  img: {
    width: 280,
    height: 250,
    alignSelf: 'center',
    marginTop: 50,
  },
});
