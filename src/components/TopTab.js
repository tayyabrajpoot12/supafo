import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

import CustomText from './CustomText';

import { colors } from '../utils/colors';
import fonts from '../assets/fonts';

const TopTab = ({
  tab,
  setTab,
  tabNames,
  rounded,
  backgroundColor,
  paddingVertical = 20,
  marginBottom,
  customStyle,
}) => {
  return (
    <>
      {rounded ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabNames.map((tabName, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setTab(index)}
              style={[
                styles.roundedContainer,
                { backgroundColor: tab == index ? '#03B1C9' : 'transparent' },
              ]}>
              <CustomText
                textTransform="capitalize"
                fontFamily={fonts.semiBold}
                label={tabName}
                color={rounded && tab == index ? colors.white : colors.black}
              />
              {tab === index && !rounded && <View style={styles.indicator} />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View
          style={[
            styles.mainContainer,
            {
              backgroundColor: backgroundColor,
              paddingVertical: paddingVertical,
              marginBottom: marginBottom,
            },
            customStyle,
          ]}>
          {tabNames.map((tabName, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setTab(index)}
              style={[styles.item, tab === index && styles.activeTab]}>
              <CustomText
                textTransform="capitalize"
                fontFamily={fonts.semiBold}
                label={tabName}
              />
              {tab === index && <View style={styles.indicator} />}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundedContainer: {
    height: 40,
    marginRight: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 99,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {},
  indicator: {
    width: '90%',
    height: 3,
    borderRadius: 100,
    backgroundColor: colors.primaryColor,
    marginTop: 3,
  },
});
