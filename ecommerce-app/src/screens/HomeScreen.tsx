import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";

const products = [
  { id: "1", name: "Dress A", price: "$40", discount: "10%", image: "https%3A%2F%2Fwww.nordstrom.com%2Fbrowse%2Fdesigner%2Fmen%2Fclothing%2Fsweatshirts-hoodies%3FfilterByBrand%3Dbalenciaga&psig=AOvVaw1Yv7fSFYVscTbn-2_DTkAi&ust=1742238748118000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCO8qCnj4wDFQAAAAAdAAAAABAE" },
  { id: "2", name: "Dress B", price: "$50", discount: "15%", image: "https://via.placeholder.com/150" },
  { id: "3", name: "Dress C", price: "$60", discount: "20%", image: "https://via.placeholder.com/150" },
];

const HomeScreen = () => {
  const navigation: any = useNavigation(); // ✅ Removed NativeStackNavigationProp

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>E-Commerce</Text>
        <View style={styles.navIcons}>
          <TouchableOpacity><Text>☰</Text></TouchableOpacity>
          <TouchableOpacity><Text>🛒</Text></TouchableOpacity>
          <TouchableOpacity><Text>👤</Text></TouchableOpacity>
        </View>
      </View>

      <Image source={{ uri: "https://via.placeholder.com/400x100" }} style={styles.banner} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate("Product", { product: item })} // ✅ No TypeScript typing needed
          />
        )}
      />

      {/* <View style={styles.bottomNav}>
        <Text>🏠 Home</Text>
        <Text>📦 Orders</Text>
        <Text>🔎 Search</Text>
        <Text>👤 Profile</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  navbar: { flexDirection: "row", justifyContent: "space-between", padding: 15, backgroundColor: "#6200ea", alignItems: "center" },
  navTitle: { fontSize: 18, color: "#fff", fontWeight: "bold" },
  navIcons: { flexDirection: "row", gap: 15 },
  banner: { width: "100%", height: 100, marginBottom: 10 },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", padding: 15, backgroundColor: "#eee", position: "absolute", bottom: 0, width: "100%" },
});

export default HomeScreen;
