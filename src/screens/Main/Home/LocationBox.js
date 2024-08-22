import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import fonts from '../../../assets/fonts';
import CustomText from '../../../components/CustomText';
import Icons from '../../../components/Icons';
import { colors } from '../../../utils/colors';

const LocationBox = () => {
  return (
    <View style={styles.box}>
      <View style={styles.leftBox}>
        <Icons
          name="map-pin"
          family={'Feather'}
          color={colors.green}
          size={22}
        />
        <View style={{ marginLeft: 10 }}>
          <CustomText label={'Seçilen Konum'} fontSize={10} />
          <CustomText label={'İstiklal Park'} fontFamily={fonts.medium} />
          <CustomText label={'10 km içinde'} fontSize={10} />
        </View>
      </View>
      <TouchableOpacity>
        <Icons
          name="chevron-down"
          family={'Feather'}
          color={colors.green}
          size={22}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LocationBox;

const styles = StyleSheet.create({
  box: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.lightGrey,
    borderBottomColor: colors.lightGrey,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
