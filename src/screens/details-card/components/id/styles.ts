import styled from "styled-components/native";
import {TextProps} from "react-native";
import {Colors} from "../../../../theme/colors";

export const DetailsCardIdStyles = {
  TextCaption: styled.Text<TextProps>`
    font-weight: bold;
  `,
  Text: styled.Text<TextProps>`
    font-size: 18px;
    font-weight: 400;
  `,
};
