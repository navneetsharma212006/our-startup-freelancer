import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';

const products = [
  {
    image: "https://picsum.photos/200/300?random=1",
    name: "Product 1",
    rating: 4.5,
    price: 29.99,
  },
  {
    image: "https://picsum.photos/200/300?random=2",
    name: "Product 2",
    rating: 4.0,
    price: 19.99,
  },
 
];

const ListData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>

      {/* <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>⭐ {item.rating}</Text>
              <Text>💰 ${item.price}</Text>
            </View>
          </View>
        )}
      /> */}
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
});
