import styled from "styled-components/native";
import {ImageProps, ViewProps} from "react-native";

export const DetailsCardLevelStyles = {
  View: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  ImageLevel: styled.Image<ImageProps & {isHidden: boolean}>`
    width: 24px;
    height: 24px;
    margin-horizontal: 1px;
    opacity: ${props => (props.isHidden ? 0 : 1)};
    border-radius: 18px;
  `,
};
