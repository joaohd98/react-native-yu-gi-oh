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
    flex-direction: row;
    padding: 7px;
  `,
  Image: styled(CustomImage)<ImageProps>`
    width: ${HelperStyles.getPercentSizePage("width", 30)};
    height: ${HelperStyles.getPercentSizePage("height", 20)};
  `,
  ViewContent: styled.View<ViewProps>`
    flex: 1;
    padding-left: 10px;
  `,
  ViewNameLevel: styled.View<ViewProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-vertical: 10px;
  `,
  TextName: styled(CustomText)<TextProps>`
    flex: 1;
    font-weight: 700;
    font-size: 14px;
    height: 15px;
    margin-right: 10px;
  `,
  ViewLevel: styled.View<ViewProps>`
    flex-direction: row;
  `,
  ImageLevel: styled(CustomImage)<ImageProps>`
    width: 18px;
    height: 18px;
    border-radius: 15px;
    margin-right: 2px;
  `,
  TextLevel: styled(CustomText)<TextProps>`
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    margin-left: 2px;
    height: 20px;
    width: 23px;
    text-align: center;
  `,
  ViewTypeCard: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-vertical: 10px;
  `,
  ImageType: styled(CustomImage)<ImageProps>`
    height: 35px;
    width: 30px;
  `,
  TextType: styled(CustomText)<TextProps>`
    flex: 1;
    font-size: 14px;
    margin-left: 5px;
  `,
  ImageEquip: styled(CustomImage)<ImageProps>`
    height: 30px;
    width: 30px;
    margin-left: 5px;
    border-radius: 20px;
  `,
  TextAtkDef: styled(CustomText)<TextProps>`
    font-size: 14px;
    font-weight: 600;
    margin-vertical: 10px;
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
