import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import fonts from '../assets/fonts';
import Icons from './Icons';

const data = [
  { name: 'Sipariş Hazırlanıyor', icon: 'timer-sand', id: 0 },
  { name: 'Sipariş Tamamlandı', icon: 'script-text-outline', id: 1 },
  { name: 'Sipariş Teslim Edildi', icon: 'check', id: 2 },
];

const ProgressBar = ({ index }) => {
  return (
    <>
      <View style={styles.lineContainer}>
        {[0, 1].map((_, i) => (
          <View key={i} style={[styles.line]} />
        ))}
      </View>
      <View style={styles.mainContainer}>
        {data.map((item, i) => (
          <View key={i}>
            <View style={[styles.countContainer, { alignSelf: 'center' }]}>
              {item.id >= index && <View style={styles.circle} />}
              <Icons
                name={item.icon}
                family={'MaterialCommunityIcons'}
                color={'#fff'}
              />
            </View>
            <CustomText
              label={item.name}
              fontSize={10}
              textAlign={'center'}
              marginTop={8}
              fontFamily={fonts.semiBold}
              width={70}
            />
          </View>
        ))}
      </View>
    </>
  );
};
export default ProgressBar;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    backgroundColor: colors.green,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  line: {
    top: 25,
    height: 2,
    borderRadius: 10,
    flex: 1,
    backgroundColor: colors.green,
  },
  circle: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#ffffff4E',
    position: 'absolute',
  },
});
