import React from 'react';
import { FlatList } from 'react-native';
import FoodCard from '../../../components/FoodCard';
import Layout from '../../../components/Layout';
import SearchBar from '../../../components/SearchBar';

const Favourites = () => {
  return (
    <Layout title={'Favorilerim'}>
      <SearchBar placeHolder={'Ara...'} />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        contentContainerStyle={{ paddingTop: 25 }}
        renderItem={() => <FoodCard isLike />}
      />
    </Layout>
  );
};

export default Favourites;
