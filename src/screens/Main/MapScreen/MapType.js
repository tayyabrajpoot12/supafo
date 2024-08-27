import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import fonts from '../../../assets/fonts';
import { colors } from '../../../utils/colors';
import HomeCard from '../Home/HomeCard';

const MapType = ({ data }) => {
  //

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 29.529684,
            longitude: 39.456417,
            latitudeDelta: 10.0922,
            longitudeDelta: 10.0421,
          }}>
          {data.map((item, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}>
              <View style={styles.icon}>
                <Text style={styles.iconText}>200</Text>
              </View>
            </Marker>
          ))}
        </MapView>
      </View>
      <View style={styles.bottomList}>
        <FlatList
          data={[1, 2, 3, 4]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ph}
          renderItem={({ item }) => (
            <View style={{}}>
              <HomeCard
                status={'completed'}
                onPress={() => navigation.navigate('FoodDetails')}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default MapType;

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    flex: 1,
    overflow: 'hidden',
  },
  mapView: {
    width: '100%',
    height: '100%',
  },
  bottomList: {
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    zIndex: 1,
    padding: 6,
  },
  iconText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  ph: {
    paddingHorizontal: 20,
  },
});
