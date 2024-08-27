import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FoodCard from '../../../components/FoodCard';

const ListView = ({ data }) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.ph}
      renderItem={() => <FoodCard />}
    />
  );
};

export default ListView;

const styles = StyleSheet.create({
  ph: {
    paddingHorizontal: 20,
  },
});
