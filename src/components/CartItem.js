import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import fonts from '../assets/fonts';
import { Images } from '../assets/images';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import Icons from './Icons';
import Currency from '../assets/images/Currency';

const CartItem = ({ item, onPress }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => setQuantity(prev => Math.max(prev - 1, 1));
  const handleIncrement = () => setQuantity(prev => prev + 1);

  const items = ['Vegan', 'Glutensiz'];

  return (
    <View style={styles.card}>
      <Image source={Images.company2} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <CustomText
            label={'Burger King'}
            fontFamily={fonts.medium}
            fontSize={13}
          />
          <TouchableOpacity
            style={styles.row1}
            activeOpacity={0.5}
            onPress={onPress}>
            <CustomText
              label={'Detaya Git'}
              fontFamily={fonts.semiBold}
              fontSize={10}
              color={colors.green}
            />
            <Icons
              name={'arrowright'}
              family={'AntDesign'}
              color={colors.green}
            />
          </TouchableOpacity>
        </View>
        <CustomText label={'Sürpriz Paket'} fontSize={10} />
        <FlatList
          data={items}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.txtBox}>
              <CustomText
                label={item}
                fontFamily={fonts.medium}
                fontSize={10}
                color={'#fff'}
              />
            </View>
          )}
        />
        <View style={[styles.row, { marginTop: 10 }]}>
          <View style={styles.row1}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={{ padding: 5 }}
              onPress={handleDecrement}
              disabled={quantity === 1}>
              <Icons
                name="circle-minus"
                family="FontAwesome6"
                color={quantity === 1 ? colors.disabled : colors.green}
                size={18}
              />
            </TouchableOpacity>
            <CustomText
              label={quantity}
              fontFamily={fonts.medium}
              fontSize={12}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ padding: 5 }}
              onPress={handleIncrement}>
              <Icons
                name="add-circle"
                family="IonIcons"
                color={colors.green}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.row1}>
              <Currency color={colors.grey2} height={10} width={10} />
              <CustomText
                label="110.00"
                color={colors.grey2}
                fontFamily={fonts.medium}
                textDecorationLine="line-through"
                fontSize={10}
              />
            </View>
            <View style={styles.row1}>
              <Currency color={colors.black} width={12} height={12} />
              <CustomText
                label="49.99"
                fontSize={12}
                fontFamily={fonts.semiBold}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  avatar: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  txtBox: {
    backgroundColor: colors.green,
    marginRight: 5,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 2,
    marginTop: 10,
    paddingBottom: 3,
  },
});
