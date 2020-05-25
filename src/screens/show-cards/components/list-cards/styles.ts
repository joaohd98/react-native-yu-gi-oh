import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";
import {Animated, FlatList, FlatListProps, ImageProps, ViewProps} from "react-native";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";

export const ShowCardsListStyles = {
  List: styled(FlatList)<FlatListProps<AllCardsResponse>>`
    height: 100%;
  `,
  Separator: styled.View<ViewProps>`
    height: 5px;
    width: 100%;
    background-color: ${Colors.grayLight};
  `,
  ViewError: styled.View<ViewProps>`
    justify-content: center;
    padding: 20px;
    margin: 30px 20px;
    border: 1.5px solid ${Colors.red};
  `,
  TextTitleError: styled.Text<ViewProps>`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  TextMessageError: styled.Text<ViewProps>`
    font-size: 17px;
    font-weight: 500;
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
