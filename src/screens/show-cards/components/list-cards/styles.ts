import styled from "styled-components/native";
import {Colors} from "../../../../theme/colors";
import {FlatList, FlatListProps, ViewProps} from "react-native";

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
};
