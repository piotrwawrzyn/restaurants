import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id');

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  if (!result) return null;

  return (
    <View>
      <Text style={styles.header}>{result.name}</Text>
      <FlatList
        contentContainerStyle={styles.imageList}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 20
  },
  imageList: {
    alignItems: 'center'
  }
});

export default ResultShowScreen;
