import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';

const Cart = () => {
  //

  const navigation = useNavigation();

  return (
    <Layout
      title={'Online Ödeme'}
      layoutContainer={{ paddingHorizontal: 0 }}
      rightIcon={
        <TouchableOpacity
          style={styles.rightBox}
          onPress={() => navigation.navigate('Cart')}>
          <Icons name={'shopping-cart'} family={'Feather'} />
        </TouchableOpacity>
      }>
      <View />
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
});
