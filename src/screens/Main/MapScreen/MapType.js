import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import fonts from '../../../assets/fonts';
import { colors } from '../../../utils/colors';
import HomeCard from '../Home/HomeCard';

const MapType = ({ data }) => {
  //

  const customStyle = [
    {
      elementType: 'geometry',
      stylers: [{ color: '#ffffff' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#000000' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#ffffff' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#cccccc' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#b0b0b0' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{ color: '#900000' }],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ color: '#f5f5f5' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#a2d5f2' }],
    },
  ];

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 37.86373045410931,
            longitude: 35.52392503246665,
            latitudeDelta: 5.639168695628172,
            longitudeDelta: 4.109210260212421,
          }}
          customMapStyle={customStyle}>
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
