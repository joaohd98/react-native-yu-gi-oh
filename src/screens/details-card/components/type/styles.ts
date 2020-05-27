import styled from "styled-components/native";
import {ImageProps, TextProps, ViewProps} from "react-native";
import {CustomImage} from "../../../../components/image";
import {CustomText} from "../../../../components/text";

export const DetailsCardTypeStyles = {
  ViewTypeCard: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-vertical: 10px;
  `,
  ImageType: styled(CustomImage)<ImageProps>`
    height: 40px;
    width: 35px;
  `,
  TextType: styled(CustomText)<TextProps>`
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    margin-left: 5px;
  `,
  ImageEquip: styled(CustomImage).attrs(() => ({
    styleView: {
      marginLeft: 5,
      borderRadius: 20,
    },
  }))<ImageProps>`
    height: 30px;
    width: 30px;
    border-radius: 20px;
  `,
};
