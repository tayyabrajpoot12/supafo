import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import { useDispatch } from 'react-redux';
import { className } from '../global-styles';
import { userLogout } from '../store/reducer/usersSlice';
import { colors } from '../utils/colors';

const LogoutSheet = ({ bottomSheetRef }) => {
  //

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    bottomSheetRef.current.close();
    dispatch(userLogout());
    navigation.reset({ index: 0, routes: [{ name: 'AuthStack' }] });
  };
  return (
    <RBSheet
      ref={bottomSheetRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        draggableIcon: {
          backgroundColor: '#000',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          height: 200,
        },
      }}>
      <View style={className('flex-1')}>
        <Text
          style={className('text-base text-black text-bold text-center my-5')}>
          Hold On!
        </Text>
        <Text style={className('text-15 text-black text-center')}>
          Are you sure you want to logout?
        </Text>
      </View>
      <View style={className('flex-row justify-between mb-5')}>
        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.close()}
          style={[styles.Btn, className('bg-white bor-1')]}>
          <Text style={className('text-base text-pm')}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={handleLogout}>
          <Text style={className('text-white text-base')}>Logout</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default LogoutSheet;

const styles = StyleSheet.create({
  Btn: {
    width: '46%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.primaryColor,
    backgroundColor: colors.primaryColor,
  },
});
