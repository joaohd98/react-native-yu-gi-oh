import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";
import {
  Animated,
  FlatList,
  FlatListProps, ImageProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {HelperStyles} from "../../../../helpers/styles";
import {ImageAnimatedStyles} from "../../../../helpers/animated-types";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";
import {CustomImage} from "../../../../components/image";

export const ShowCardsListStyles = {
  List: styled(FlatList)<FlatListProps<AllCardsResponse>>`
    height: 100%;
  `,
  Separator: styled.View<ViewProps>`
    height: 5px;
    width: 100%;
    background-color: ${Colors.grayLight};
  `,
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
  ViewFooter: styled.View<ViewProps>`
    flex-direction: row;
    margin-top: 50px;
    justify-content: center;
  `,
  ImageFooter: styled(Animated.Image)<ImageProps>`
    width: 32px;
    height: 32px;
  `,
};
