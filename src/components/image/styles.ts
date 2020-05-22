import styled from "styled-components/native";
import {Animated, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {ImageAnimatedStyles} from "../../helpers/animated-types";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const CustomImageStyle = {
  TouchableOpacity: styled(AnimatedTouchableOpacity)<TouchableOpacityProps>`
    justify-content: center;
    align-items: center;
  `,
  Image: styled(Animated.Image)<ImageAnimatedStyles>``,
};
