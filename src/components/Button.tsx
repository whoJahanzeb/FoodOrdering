import { View, Text, Pressable } from "react-native";
import React, { forwardRef } from "react";
type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;
const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        className="bg-green-500 rounded-full items-center py-2"
      >
        <Text className="text-white font-bold text-lg">{text}</Text>
      </Pressable>
    );
  }
);

export default Button;
