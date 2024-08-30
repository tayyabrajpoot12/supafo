import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import fonts from '../../../assets/fonts';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import Icons from '../../../components/Icons';
import { colors } from '../../../utils/colors';

const AddRating = () => {
  const starsCount = 5;
  const [selectedRating, setSelectedRating] = useState(0);

  const stars = Array.from({ length: starsCount }, (_, index) => ({
    id: index + 1,
    filled: index < selectedRating,
  }));

  return (
    <Layout title={'Değerlendirmeler ve Yorumlar'}>
      <CustomText
        fontSize={15}
        marginTop={30}
        alignSelf={'center'}
        fontFamily={fonts.semiBold}
        label={'Puan verin ve yorum yazın'}
      />
      <CustomText
        label={'Diğer kullanıcılara yardımcı olmak için deneyimizi paylaşın'}
        alignSelf={'center'}
        textAlign={'center'}
        marginTop={5}
        paddingHorizontal={30}
      />

      <View style={styles.row}>
        {stars.map(item => (
          <TouchableOpacity
            style={styles.starBox}
            key={item.id}
            onPress={() => setSelectedRating(item.id)}>
            <Icons
              name={item?.filled ? 'star' : 'staro'}
              color={colors.yellow}
              size={32}
              family={'AntDDesign'}
            />
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  );
};

export default AddRating;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
