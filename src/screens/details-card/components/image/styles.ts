import styled from "styled-components/native";
import {ImageProps} from "react-native";
import {HelperStyles} from "../../../../helpers/styles";
import {CustomImage} from "../../../../components/image";

export const DetailsCardImageStyles = {
  ImageCard: styled(CustomImage).attrs(() => ({
    styleView: {
      justifyContent: "center",
      alignItems: "center",
    },
  }))<ImageProps>`
    width: ${HelperStyles.getPercentSizePage("width", 100)};
    height: ${props => props.cardHeight}px;
  `,
};
