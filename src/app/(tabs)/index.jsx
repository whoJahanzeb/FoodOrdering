import products from "@/assets/data/products";
import { View, Text, Image } from "react-native";

const product = products[0];
export default function TabOneScreen() {
  return (
    <View className="bg-white p-2 rounded-lg">
      <Image
        source={{ uri: product.image }}
        resizeMode="contain"
        className="w-[100%] aspect-square"
      />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
}
