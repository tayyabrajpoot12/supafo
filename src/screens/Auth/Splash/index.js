/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';

import Layout from '../../../components/Layout';
import { className } from '../../../global-styles';

import { Image, View } from 'react-native';
import { Images } from '../../../assets/images';

const Splash = () => {
  //
  const navigation = useNavigation();

  const checkIsUserLogin = useCallback(async () => {
    if (!navigation.isFocused()) {
      return false;
    }
    const checkId = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        return value !== null;
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
        return false;
      }
    };

    const checkIntro = async () => {
      try {
        const value = await AsyncStorage.getItem('intro_has_seen');
        return value === 'intro_seen';
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
        return false;
      }
    };

    const isLogin = await checkId();
    const isSeen = await checkIntro();

    if (isSeen) {
      navigation.replace('AuthStack', { screen: 'Intro' });
    } else {
      if (isLogin) {
        navigation.reset({ index: 0, routes: [{ name: 'MainStack' }] });
      } else {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'AuthStack',
              state: {
                routes: [
                  {
                    name: 'Login',
                  },
                ],
              },
            },
          ],
        });
      }
    }
  }, [navigation]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkIsUserLogin();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [checkIsUserLogin]);

  return (
    <Layout
      isSafeAreaView={true}
      showNavBar={false}
      isScroll={false}
      containerStyle={className('bg-white')}>
      <View style={className('bg-white align-center flex-1 justify-center')}>
        <Image
          source={Images.logo}
          style={[className('w-25 h-25'), { top: -10 }]}
        />
      </View>
    </Layout>
  );
};

export default Splash;
