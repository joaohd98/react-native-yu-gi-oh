import styled from "styled-components/native";
import {TextProps, ViewProps} from "react-native";

export const DetailsCardDescriptionStyles = {
  View: styled.View<ViewProps>``,
  TextType: styled.Text<TextProps>`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  `,
  TextDescription: styled.Text<TextProps>`
    font-size: 16px;
    font-weight: 400;
  `,
};
