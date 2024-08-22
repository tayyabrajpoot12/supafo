import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FilterIcon } from '../../../assets/images';
import Layout from '../../../components/Layout';
import SearchBar from '../../../components/SearchBar';
import FoodCard from '../../../components/FoodCard';

const Favourites = () => {
  return (
    <Layout title={'Favorilerim'}>
      <View style={styles.row}>
        <SearchBar placeHolder={'Ara...'} />
        <TouchableOpacity style={styles.icon}>
          <FilterIcon />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        contentContainerStyle={{ paddingTop: 25 }}
        renderItem={() => <FoodCard isLike />}
      />
    </Layout>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 10,
    height: 45,
    justifyContent: 'center',
    width: 40,
    alignItems: 'center',
  },
});
