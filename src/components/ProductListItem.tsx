import { View, Text, Image } from "react-native";
import { Product } from "../types";
export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";
type ProductListItemProp = {
  product: Product;
};
export const ProductListItem = ({ product }: ProductListItemProp) => {
  return (
    <View className="bg-white p-2 rounded-lg">
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        resizeMode="contain"
        className="w-[100%] aspect-square"
      />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};
