import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const [selectSize, setSelectSize] = useState("M");
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <Text>Product not found</Text>;
  }
  const addToCart = () => {
    const params = `id=${id}$size=${selectSize}`;
    console.warn(params);
  };
  return (
    <View className="bg-white flex-1 p-4">
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        resizeMode="contain"
        className="w-[100%] aspect-square"
      />

      <Text className="font-bold">Select size</Text>
      <View className="flex-row justify-around my-3">
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectSize(size)}
            key={size}
            style={{
              backgroundColor: selectSize === size ? "#22c55e" : "white",
            }}
            className="bg-gray-200 rounded-full h-10 w-10 items-center justify-center"
          >
            <Text
              className="text-lg font-semibold"
              style={{ color: selectSize === size ? "white" : "gray" }}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="font-bold text-base mt-auto">
        Price: ${product.price}
      </Text>
      <Button text="Add to Cart" onPress={addToCart} />
    </View>
  );
};

export default ProductDetailScreen;
