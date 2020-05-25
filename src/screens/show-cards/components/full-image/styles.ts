import styled from "styled-components/native";
import {Animated, TextProps, TouchableOpacityProps, ViewProps} from "react-native";
import {Colors} from "../../../../theme/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import {ImageAnimatedStyles} from "../../../../helpers/animated-types";
import {HelperStyles} from "../../../../helpers/styles";

export const ShowCardsFullImageStyles = {
  FullImageContainer: styled(Animated.View)<ViewProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    background-color: ${Colors.transparentBlack};
  `,
  FullImageButton: styled.TouchableOpacity<TouchableOpacityProps>`
    position: absolute;
    top: 20px;
    right: 20px;
  `,
  FullImageIcon: styled(Icon)<TextProps>`
    font-size: 40px;
    color: ${Colors.white};
  `,
  FullImageView: styled.View<ViewProps>`
    top: 0;
    width: ${HelperStyles.getPercentSizePage("width", 90)};
    height: ${HelperStyles.getPercentSizePage("height", 90)};
  `,
  FullImage: styled(Animated.Image)<ImageAnimatedStyles>`
    position: absolute;
    top: 0;
    left: 0;
  `,
}
