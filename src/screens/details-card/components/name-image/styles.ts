import styled from "styled-components/native";
import {ImageProps} from "react-native";
import {HelperStyles} from "../../../../helpers/styles";
import {CustomImage} from "../../../../components/image";

export const DetailsCardNameImageStyles = {
  ImageCard: styled(CustomImage).attrs(() => ({
    styleView: {
      justifyContent: "center",
      alignItems: "center",
    },
  }))<ImageProps>`
    width: ${HelperStyles.getPercentSizePage("width", 100)};
    height: ${HelperStyles.getPercentSizePage("height", 80)};
  `,
  ImageName: styled(CustomImage).attrs(() => ({
    styleView: {
      justifyContent: "center",
      alignItems: "center",
    },
  }))<ImageProps>`
    width: ${HelperStyles.getPercentSizePage("width", 100)};
    height: 100px;
  `,
};
