import styled from "styled-components/native";
import {Animated, ImageProps} from "react-native";
import {HelperStyles} from "../../../../helpers/styles";

export const DetailsCardNameStyles = {
  ImageName: styled(Animated.Image)<ImageProps>`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: ${HelperStyles.getPercentSizePage("width", 100)};
    height: 50px;
  `,
};
