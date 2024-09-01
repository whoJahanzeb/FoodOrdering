import { View, Text, Platform, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "@/providers/CartProvider";
import CartListItem from "@/components/CartListItem";

const CartScreen = () => {
  const { cartItems } = useCart();
  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
