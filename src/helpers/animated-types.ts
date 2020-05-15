import {Animated, TextStyle, ViewStyle} from "react-native";

type MaybeAnimated<T> = T | Animated.Value | Animated.AnimatedInterpolation;
type AnimatedScalar = string | number | undefined;

type AnimatedStyle<T> = {
  [Key in keyof T]: T[Key] extends AnimatedScalar
    ? MaybeAnimated<T[Key]>
    : T[Key] extends Array<infer U>
    ? Array<AnimatedStyle<U>>
    : AnimatedStyle<T[Key]>;
};

export type ViewAnimatedStyles = AnimatedStyle<ViewStyle>;
export type TextAnimatedStyles = AnimatedStyle<TextStyle>;
export type InputAnimatedStyles = AnimatedStyle<TextStyle>;
