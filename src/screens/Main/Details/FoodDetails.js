import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import fonts from '../../../assets/fonts';
import Currency from '../../../assets/images/Currency';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import Layout from '../../../components/Layout';
import { colors } from '../../../utils/colors';
import FoodDetailsHeader from './FoodDetailsHeader';
import HealthModal from '../../../components/HealthMessage';

const InfoRow = ({
  icon,
  family,
  label,
  fontSize = 13,
  marginLeft = 4,
  fontFamily = fonts.regular,
}) => (
  <View style={[styles.row1, { marginTop: 5 }]}>
    <Icons family={family} name={icon} color={colors.green} size={16} />
    <CustomText
      label={label}
      fontSize={fontSize}
      marginLeft={marginLeft}
      fontFamily={fontFamily}
    />
  </View>
);

const FoodDetails = () => {
  const buyOptions = ['Vejeteryan', 'Vegan', 'Glutensiz', 'Laktozsuz'];
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);

  const handleDecrement = () => setQuantity(prev => Math.max(prev - 1, 1));
  const handleIncrement = () => setQuantity(prev => prev + 1);

  return (
    <Layout
      showNavBar={false}
      layoutContainer={{ paddingHorizontal: 0 }}
      isScroll={false}>
      <ScrollView>
        <FoodDetailsHeader />
        <View style={styles.box}>
          <View style={styles.row}>
            <View>
              <InfoRow
                icon="bag"
                family="SimpleLineIcons"
                label="Sürpriz Paket"
              />
              <InfoRow
                icon="clockcircleo"
                family="AntDesign"
                label="Bugün: 06:00 - 07:00"
              />
              <InfoRow icon="star" family="AntDesign" label="4.9 (574)" />
            </View>
            <View>
              <View style={styles.row1}>
                <Currency color={colors.grey2} />
                <CustomText
                  label="110.00"
                  color={colors.grey2}
                  fontFamily={fonts.medium}
                  textDecorationLine="line-through"
                />
              </View>
              <View style={styles.row1}>
                <Currency color={colors.black} width={17} height={17} />
                <CustomText
                  label="49.99"
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
              family="Feather"
              color={colors.green}
              size={18}
            />
            <View style={{ marginLeft: 5 }}>
              <CustomText
                label="İstiklal Cd. No: 146, 34433 Beyoğlu/İs..."
                fontFamily={fonts.medium}
              />
              <CustomText
                label="Mağaza hakkında daha fazla bilgi"
                fontSize={10}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Icons
              name="chevron-right"
              family="Feather"
              color={colors.green}
              size={22}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <CustomText
            label="Ne Alabilirsin?"
            fontFamily={fonts.medium}
            marginTop={10}
          />
          <CustomText
            label="Burger King'den eşsiz lezzetlerle dolu bir Sürpriz Paketi kurtarın."
            fontSize={12}
            marginTop={10}
            marginBottom={35}
          />
          <FlatList
            data={buyOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.txtBox}>
                <CustomText
                  label={item}
                  fontFamily={fonts.medium}
                  fontSize={10}
                  color="#fff"
                />
              </View>
            )}
            keyExtractor={item => item}
          />
        </View>
        <View style={[styles.box, styles.row]}>
          <CustomText
            label="Alerjenler ve İçerikler"
            fontFamily={fonts.medium}
          />
          <TouchableOpacity>
            <Icons
              name="questioncircle"
              family="AntDesign"
              color={colors.green}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <CustomText
            label="Başkaları ne diyor?"
            fontFamily={fonts.medium}
            marginTop={10}
            marginBottom={10}
          />
          <InfoRow
            icon="star"
            family="AntDesign"
            label="4.1 / 5.0"
            fontFamily={fonts.medium}
            fontSize={17}
          />
          <InfoRow
            icon="clockcircleo"
            family="AntDesign"
            label="Sipariş Hızı"
            fontFamily={fonts.medium}
            fontSize={14}
          />
          <InfoRow
            icon="silverware-fork-knife"
            family="MaterialCommunityIcons"
            label="Lezzetli Yemek"
            fontFamily={fonts.medium}
            fontSize={14}
          />
          <InfoRow
            icon="smileo"
            family="AntDesign"
            label="Güler yüzlü Ekip"
            fontFamily={fonts.medium}
          />
          <CustomText
            label={'Satıcının son 6 aydaki 196 derecelendirmeye dayanmaktadır.'}
            color={colors.green}
            fontSize={12}
            marginTop={10}
            marginBottom={10}
          />
        </View>
        <View style={styles.box}>
          <CustomText
            label="Saklama İpucu"
            fontFamily={fonts.medium}
            marginTop={10}
            marginBottom={10}
          />
          <View style={[styles.row1, { marginBottom: 25 }]}>
            <Icons name="info" family="Feather" color={colors.green} />
            <CustomText
              label="Yiyecekleri doğru sıcaklıkta saklamak, etiketlemek ve tarihlemek, gıda güvenliğini sağlamak ve israfı azaltmak için önemlidir."
              fontSize={12}
              marginLeft={5}
              containerStyle={{ flex: 1 }}
            />
          </View>
        </View>
        <View style={[styles.box, styles.row, { marginBottom: 20 }]}>
          <CustomText label="Taşıma şekli" fontFamily={fonts.medium} />
          <TouchableOpacity>
            <Icons
              name="questioncircle"
              family="AntDesign"
              color={colors.green}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomBox}>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.4}
            style={{ padding: 5 }}
            onPress={handleDecrement}
            disabled={quantity === 1}>
            <Icons
              name="circle-minus"
              family="FontAwesome6"
              color={quantity === 1 ? colors.disabled : colors.green}
              size={21}
            />
          </TouchableOpacity>
          <CustomText
            label={quantity}
            fontFamily={fonts.medium}
            fontSize={17}
            marginLeft={8}
            marginRight={8}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ padding: 5 }}
            onPress={handleIncrement}>
            <Icons
              name="add-circle"
              family="IonIcons"
              color={colors.green}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn}>
          <CustomText
            label="Sepete Ekle"
            fontFamily={fonts.medium}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <HealthModal visible={visible} setVisible={setVisible} />
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
    paddingVertical: 10,
  },
  txtBox: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  bottomBox: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#00000033',
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
  },
  btn: {
    backgroundColor: colors.green,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 50,
  },
});
