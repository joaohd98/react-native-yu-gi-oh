import styled from "styled-components/native";
import {TextProps, ViewProps} from "react-native";

export const DetailsCardAtkDefStyles = {
  View: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
  `,
  TextCaption: styled.Text<TextProps>`
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
  `,
  Text: styled.Text<TextProps>`
    font-size: 18px;
    font-weight: 400;
    margin-right: 20px;
  `,
};
