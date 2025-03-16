import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "../screens/HomeScreen"; // Ensure this path is correct
// import ProductScreen from "../screens/ProductScreen"; // Ensure this path is correct
// import CartScreen from "./screens/CartScreen"; // Ensure this path is correct
// import CartScreen from "../screens/CartScreen";
// import ProductScreen from "../screens/ProductScreen";
// import ProfileScreen from "../screens/ProfileScreen"; // Ensure this path is correct
import { Ionicons } from "@expo/vector-icons"; // Ensure this import is correct
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
// import HomeScreen from "../screens/HomeScreen";
import HomeScreen from "../screens/HomeScreen";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* <Stack.Screen name="Product" component={ProductScreen} /> */}
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Cart") iconName = "cart";
          else if (route.name === "Profile") iconName = "person";
          return <Ionicons name={iconName!} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
