import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

type Product = {
  id: string;
  name: string;
  price: string;
  discount: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  onPress: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.discount}>Discount: {product.discount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#333",
  },
  discount: {
    fontSize: 12,
    color: "red",
  },
});

export default ProductCard;
