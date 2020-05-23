import styled from "styled-components/native";
import {HelperStyles} from "../../../../helpers/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {Animated, ImageProps, TextProps, TouchableOpacityProps, ViewProps} from "react-native";
import {Colors} from "../../../../theme/colors";
import {IconAnimatedStyles, ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {CustomText} from "../../../../components/text";
import {CustomImage} from "../../../../components/image";
import {CustomButton} from "../../../../components/button";

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
    justify-content: flex-start;
    padding-left: 10px;
    padding-right: 5px;
  `,
  TextName: styled(CustomText)<TextProps>`
    font-weight: 700;
    font-size: 14px;
    height: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
  `,
  TextID: styled(CustomText)<TextProps>`
    font-weight: 600;
    font-size: 12px;
    height: 15px;
    margin-bottom: 20px;
  `,
  ViewTypeCard: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  ImageType: styled(CustomImage)<ImageProps>`
    height: 30px;
    width: 25px;
  `,
  TextType: styled(CustomText)<TextProps>`
    flex: 1;
    margin-horizontal: 5px;
    font-size: 14px;
  `,
  ImageEquip: styled(CustomImage)<ImageProps>`
    height: 20px;
    width: 20px;
    border-radius: 20px;
    margin-right: 10px;
  `,
  IconButton: styled(CustomButton)<TouchableOpacityProps>`
    position: absolute;
    right: 10px;
    bottom: 10px;
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
