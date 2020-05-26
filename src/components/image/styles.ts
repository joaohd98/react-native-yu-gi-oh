import styled from "styled-components/native";
import {Animated, TouchableOpacity, TouchableOpacityProps, Image, ViewProps} from "react-native";
import {ImageAnimatedStyles} from "../../helpers/animated-types";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const CustomImageStyle = {
  TouchableOpacity: styled(AnimatedTouchableOpacity)<TouchableOpacityProps>`
    justify-content: center;
    align-items: center;
  `,
  ViewCover: styled.View<ViewProps>`
    flex: 1;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  `,
  Image: styled(AnimatedImage)<ImageAnimatedStyles>``,
};
