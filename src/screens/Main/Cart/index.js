import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import Currency from '../../../assets/images/Currency';
import CartItem from '../../../components/CartItem';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';
import MessageBox from './MessageBox';

const Cart = () => {
  //
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [data, setData] = useState([1, 2, 3, 4]);

  const renderHiddenItem = ({ item }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={styles.deleteBox}>
        <Icons name="delete" family={'AntDesign'} color={colors.white} />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    setData([1, 2, 3, 4]);
  }, [isFocused]);

  return (
    <Layout
      title={'Sepet'}
      isScroll={false}
      layoutContainer={{ paddingHorizontal: 0 }}
      rightIcon={
        <TouchableOpacity style={styles.rightBox} onPress={() => setData([])}>
          <Icons name={'delete'} family={'AntDesign'} />
        </TouchableOpacity>
      }>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SwipeListView
          data={data}
          scrollEnabled={false}
          contentContainerStyle={{ padding: 20 }}
          ListEmptyComponent={<MessageBox />}
          showsVerticalScrollIndicator={false}
          disableRightSwipe
          rightOpenValue={-75}
          previewRowKey={'0'}
          renderHiddenItem={renderHiddenItem}
          renderItem={() => (
            <CartItem onPress={() => navigation.navigate('FoodDetails')} />
          )}
          ItemSeparatorComponent={<View style={styles.seprator} />}
        />
      </ScrollView>
      {data.length > 0 && (
        <View style={styles.bottomBox}>
          <View style={styles.row}>
            <CustomText label={'Tutar'} fontSize={15} />
            <View style={styles.row1}>
              <Currency color="#000" />
              <CustomText label={'400'} fontSize={15} marginLeft={2} />
            </View>
          </View>
          <View style={styles.row}>
            <CustomText label={'Sepette Kazanç'} fontSize={15} />
            <View style={styles.row1}>
              <Currency color="#000" />
              <CustomText label={'100'} fontSize={15} marginLeft={2} />
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <CustomText label={'Toplam'} fontSize={15} />
            <View style={styles.row1}>
              <Currency color="#000" />
              <CustomText label={'500'} fontSize={15} marginLeft={2} />
            </View>
          </View>
          <CustomButton
            title={'Sepeti Onayla'}
            customStyle={{ marginTop: 30 }}
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      )}
    </Layout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  deleteBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  rowBack: {
    alignItems: 'flex-end',
    backgroundColor: colors.orange,
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  seprator: {
    width: '100%',
    height: 20,
  },
  rightBox: {
    position: 'absolute',
    padding: 5,
    right: 20,
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
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: colors.green,
    width: '100%',
    marginVertical: 20,
  },
});
