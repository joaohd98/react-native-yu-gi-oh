import styled from "styled-components/native";
import {HelperStyles} from "../../../../helpers/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {Animated, ImageProps, TextProps, TouchableOpacityProps, ViewProps} from "react-native";
import {Colors} from "../../../../theme/colors";
import {IconAnimatedStyles, ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {CustomText} from "../../../../components/text";
import {CustomImage} from "../../../../components/image";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const ShowCardsListCardStyles = {
  Container: styled.View<ViewProps>`
    background-color: ${Colors.grayLight};
  `,
  View: styled(Animated.View)<ViewAnimatedStyles>`
    flex: 1;
    background-color: ${Colors.backgroundColor};
    padding: 5px;
    margin-horizontal: 5px;
    flex-direction: row;
  `,
  Image: styled(CustomImage)<ImageProps>`
    width: ${HelperStyles.getPercentSizePage("width", 30)};
    height: ${HelperStyles.getPercentSizePage("height", 20)};
  `,
  ViewText: styled.View<ViewProps>`
    flex: 1;
    justify-content: center;
    padding-left: 10px;
    padding-right: 5px;
  `,
  TextName: styled(CustomText)<TextProps>`
    font-weight: 700;
    font-size: 18px;
    margin-vertical: 5px;
    padding-vertical: 3px;
  `,
  ViewIcons: styled.View<ViewProps>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px;
  `,
  IconButton: styled.TouchableOpacity<TouchableOpacityProps>`
    width: 40px;
    height: 40px;
    border: 1px solid ${Colors.white};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.white};
  `,
  Icon: styled(AnimatedIcon)<IconAnimatedStyles>`
    font-size: 20px;
  `,
};
