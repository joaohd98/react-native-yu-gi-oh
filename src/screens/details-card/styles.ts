import styled from "styled-components/native";
import {ViewProps} from "react-native";
import {Colors} from "../../theme/colors";

export const DetailsCardStyles = {
  View: styled.View<ViewProps>`
    margin: 10px;
  `,
  Item: styled.View<ViewProps>`
    border: 1px solid ${Colors.grayDark};
    padding: 10px;
    margin-vertical: 10px;
  `,
}