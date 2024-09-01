import { View, Text, Image, Pressable } from "react-native";
import { Product } from "../types";
import { Link } from "expo-router";
export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";
type ProductListItemProp = {
  product: Product;
};
export const ProductListItem = ({ product }: ProductListItemProp) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable className="bg-white p-2 rounded-lg flex-1">
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          resizeMode="contain"
          className="w-[100%] aspect-square"
        />
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </Pressable>
    </Link>
  );
};
