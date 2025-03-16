import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

interface ProductScreenProps {
  route: {
    params: {
      product: {
        image: string;
        name: string;
        price: string;
        discount: string;
      };
    };
  };
}

const ProductScreen: React.FC<ProductScreenProps> = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price} ({product.discount} Off)</Text>
      <Text style={styles.description}>This is a detailed description of the product...</Text>

      {/* Related Products */}
      <Text style={styles.sectionTitle}>Related Products</Text>
      <View style={styles.relatedContainer}>
        {/* Placeholder products */}
        <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.relatedImage} />
        <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.relatedImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  productImage: { width: "100%", height: 300 },
  productName: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  productPrice: { fontSize: 18, color: "#666", marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  relatedContainer: { flexDirection: "row", justifyContent: "space-between" },
  relatedImage: { width: 100, height: 100 },
});

export default ProductScreen;