import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import fonts from '../../../assets/fonts';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import SearchBar from '../../../components/SearchBar';
import { colors } from '../../../utils/colors';
import HomeCard from './HomeCard';
import HomeSwiper from './HomeSwiper';
import LocationBox from './LocationBox';
import { Images } from '../../../assets/images';

const Home = () => {
  return (
    <Layout showNavBar={false} layoutContainer={{ paddingHorizontal: 0 }}>
      <LocationBox />
      <View style={styles.ph}>
        <SearchBar placeHolder={'Ara...'} />
        <CustomText
          label={'Haftanın Yıldızları'}
          fontFamily={fonts.semiBold}
          color={colors.green}
          marginTop={20}
          marginBottom={10}
        />
      </View>
      <HomeSwiper data={[1, 2, 3, 4, 5]} />
      <View style={styles.ph}>
        <CustomText
          label={'Yeni Sürpriz Paketler'}
          fontFamily={fonts.semiBold}
          color={colors.green}
          marginTop={10}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        horizontal
        contentContainerStyle={styles.contentStyle}
        renderItem={({ item }) => <HomeCard />}
      />
      <View style={styles.ph}>
        <CustomText
          label={'Sizin için önerilen'}
          fontFamily={fonts.semiBold}
          color={colors.green}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        horizontal
        contentContainerStyle={styles.contentStyle}
        renderItem={({ item }) => <HomeCard />}
      />
      <View style={styles.ph}>
        <CustomText
          label={'Kahvaltılık'}
          fontFamily={fonts.semiBold}
          color={colors.green}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        horizontal
        contentContainerStyle={styles.contentStyle}
        renderItem={({ item }) => <HomeCard />}
      />
      <View style={styles.ph}>
        <CustomText
          label={'Öğle Yemeği'}
          fontFamily={fonts.semiBold}
          color={colors.green}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        horizontal
        contentContainerStyle={styles.contentStyle}
        renderItem={({ item }) => <HomeCard />}
      />
      <View style={styles.ph}>
        <ImageBackground
          source={Images.donate}
          style={styles.donationBox}
          imageStyle={styles.img}>
          <TouchableOpacity style={styles.donateBox}>
            <CustomText
              label={'Bağış Yap'}
              fontFamily={fonts.medium}
              color={'#fff'}
              fontSize={13}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.ph}>
        <CustomText
          label={'Favorilerim'}
          fontFamily={fonts.semiBold}
          color={colors.green}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        horizontal
        contentContainerStyle={styles.contentStyle}
        renderItem={({ item }) => <HomeCard isLike />}
      />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  ph: {
    paddingHorizontal: 20,
  },
  contentStyle: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  img: {
    borderRadius: 15,
    resizeMode: 'stretch',
  },
  donationBox: {
    marginBottom: 20,
    width: '100%',
    height: 140,
    marginTop: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  donateBox: {
    paddingVertical: 8,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 25,
    top: 20,
  },
});
