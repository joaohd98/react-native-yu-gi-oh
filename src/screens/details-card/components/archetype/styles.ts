import styled from "styled-components/native";
import {TextProps} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const DetailsCardArchetypeStyles = {
  Icon: styled(Icon)<TextProps>`
    font-size: 18px;
  `,
  TextCaption: styled.Text<TextProps>`
    font-weight: bold;
  `,
  Text: styled.Text<TextProps>`
    font-size: 18px;
    font-weight: 400;
  `,
};
