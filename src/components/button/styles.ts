import styled from "styled-components/native";
import {Animated, TouchableOpacity, TouchableOpacityProps} from "react-native";

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export const CustomButtonStyle = {
  Button: styled(TouchableOpacityAnimated)<TouchableOpacityProps>``,
};
