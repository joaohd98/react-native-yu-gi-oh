import styled from "styled-components/native";
import {Animated, TouchableOpacityProps} from "react-native";
import {ImageAnimatedStyles} from "../../helpers/animated-types";

export const CustomImageStyle = {
  TouchableOpacity: styled.TouchableOpacity<TouchableOpacityProps>`
    
  `,
  Image: styled(Animated.Image)<ImageAnimatedStyles>`
  
  `
}
