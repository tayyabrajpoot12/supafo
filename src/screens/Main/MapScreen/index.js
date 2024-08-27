import React, { useState } from 'react';
import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import fonts from '../../../assets/fonts';
import { FilterIcon } from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import SearchBar from '../../../components/SearchBar';
import { colors } from '../../../utils/colors';
import ListView from './ListView';
import MapType from './MapType';

const MapScreen = () => {
  //

  const data = [
    { latitude: 29.529684, longitude: 39.456417 },
    { latitude: 24.529684, longitude: 49.456417 },
    { latitude: 31.529684, longitude: 37.456417 },
    { latitude: 34.529684, longitude: 42.456417 },
    { latitude: 28.529684, longitude: 44.456417 },
    { latitude: 26.529684, longitude: 36.456417 },
  ];
  const [viewType, setViewType] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Layout title={'Keşfet'} layoutContainer={{ paddingHorizontal: 0 }}>
      <View style={viewType === 1 ? styles.top1 : styles.top}>
        <View style={styles.row}>
          <SearchBar placeHolder={'Ara...'} />
          <TouchableOpacity style={styles.filter}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <TouchableOpacity
              style={viewType === 1 ? styles.activeBtn : styles.btn}
              onPress={() => setViewType(1)}>
              <CustomText
                label={'Liste'}
                fontSize={13}
                color={viewType === 1 ? colors.white : colors.black}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={viewType === 2 ? styles.activeBtn : styles.btn}
              onPress={() => setViewType(2)}>
              <CustomText
                label={'Harita'}
                fontSize={13}
                color={viewType === 2 ? colors.white : colors.black}
                fontFamily={fonts.medium}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <View style={styles.btn}>
              <CustomText
                label={'Tükendi'}
                fontSize={12}
                fontFamily={fonts.medium}
              />
            </View>
            <Switch
              trackColor={{ false: '#767577', true: colors.orange }}
              thumbColor={colors.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      {viewType === 1 ? <MapType data={data} /> : <ListView data={data} />}
    </Layout>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  ph: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filter: {
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    marginLeft: 10,
    backgroundColor: colors.white,
    top: 3,
    borderColor: colors.lightGrey,
  },
  top: {
    paddingHorizontal: 20,
    zIndex: 1,
    width: '100%',
    top: 7,
    marginBottom: 35,
  },
  top1: {
    paddingHorizontal: 20,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: 7,
  },
  box: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 10,
    borderRadius: 50,
    padding: 4,
    borderColor: colors.lightGrey,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  activeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: colors.primaryColor,
    borderRadius: 20,
  },
});
