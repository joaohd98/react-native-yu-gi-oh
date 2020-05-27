import styled from "styled-components/native";
import {TextProps, ViewProps} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const DetailsCardArchetypeStyles = {
  View: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
  `,
  ViewImage: styled.View<ViewProps>`
    justify-content: center;
    align-items: center;
  `,
  Icon: styled(Icon)<TextProps>`
    font-size: 18px;
    margin-right: 5px;
  `,
  TextCaption: styled.Text<TextProps>`
    font-size: 18px;
    font-weight: bold;
    margin-right: 7px;
  `,
  Text: styled.Text<TextProps>`
    font-size: 18px;
    font-weight: 400;
  `,
};
