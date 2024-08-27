import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import fonts from '../../../assets/fonts';
import Currency from '../../../assets/images/Currency';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';
import FoodDetailsHeader from './FoodDetailsHeader';

const FoodDetails = () => {
  return (
    <Layout showNavBar={false} layoutContainer={{ paddingHorizontal: 0 }}>
      <FoodDetailsHeader />
      <View style={styles.box}>
        <View style={styles.row}>
          <View>
            <View style={[styles.row1, { marginTop: 8 }]}>
              <Icons
                family={'SimpleLineIcons'}
                name={'bag'}
                color={colors.green}
              />
              <CustomText label={'Sürpriz Paket'} marginLeft={2} />
            </View>
            <View style={[styles.row1, { marginTop: 8 }]}>
              <Icons
                family={'AntDesign'}
                name={'clockcircleo'}
                color={colors.green}
                size={16}
              />
              <CustomText label={'Bugün: 06:00 - 07:00'} marginLeft={2} />
            </View>
            <View style={[styles.row1, { marginTop: 8 }]}>
              <Icons family={'AntDesign'} name={'star'} color={colors.green} />
              <CustomText label={'4.9 (574)'} marginLeft={2} />
            </View>
          </View>
          <View>
            <View style={styles.row1}>
              <Currency color={colors.grey2} />
              <CustomText
                label={'110.00'}
                color={colors.grey2}
                fontFamily={fonts.medium}
                textDecorationLine={'line-through'}
              />
            </View>
            <View style={styles.row1}>
              <Currency color={colors.black} width={17} height={17} />
              <CustomText
                label={'49.99'}
                fontSize={17}
                fontFamily={fonts.semiBold}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.box, styles.row]}>
        <View style={styles.row1}>
          <Icons
            name="map-pin"
            family={'Feather'}
            color={colors.green}
            size={18}
          />
          <View style={{ marginLeft: 5 }}>
            <CustomText
              label={'İstiklal Cd. No: 146, 34433 Beyoğlu/İs...'}
              fontFamily={fonts.medium}
            />
            <CustomText
              label={'Mağaza hakkında daha fazla bilgi'}
              fontSize={10}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Icons
            name="chevron-right"
            family={'Feather'}
            color={colors.green}
            size={22}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.box, styles.row]}>
        <View style={{ marginLeft: 5 }}>
          <CustomText
            label={'Alerjenler ve İçerikler'}
            fontFamily={fonts.medium}
          />
        </View>
        <TouchableOpacity>
          <Icons
            name="questioncircle"
            family={'AntDesign'}
            color={colors.green}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  row1: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },

  box: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
