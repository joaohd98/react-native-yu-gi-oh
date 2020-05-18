import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";
import {
  FlatList,
  FlatListProps,
  ImageProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {HelperStyles} from "../../../../helpers/styles";

type Props = {
  key: string;
  image: string;
};

export const ShowCardsListStyles = {
  List: styled(FlatList)<FlatListProps<Props>>`
    height: 100%;
  `,
  Separator: styled.View<ViewProps>`
    height: 5px;
    width: 100%;
    background-color: ${Colors.grayLight};
  `,
  FullImageContainer: styled.View<ViewProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex: 1;
    justify-content: center;
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
  FullImage: styled.Image<ImageProps>`
    width: ${HelperStyles.getPercentSizePage("width", 80)};
    height: ${HelperStyles.getPercentSizePage("height", 80)};
  `,
};
