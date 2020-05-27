import React from "react";
import {DetailsCardTypeStyles} from "./styles";

interface Props {
  type?: string;
  typeImage?: string;
  attribute?: string;
  attributeImage?: string;
  race?: string;
  raceImage?: string;
}

interface State {}

export class DetailsCardType extends React.Component<Props> {
  state: State = {};

  render() {
    const {ViewTypeCard, ImageType, TextType, ImageEquip} = DetailsCardTypeStyles;
    const {type, typeImage, attribute, attributeImage, race, raceImage} = this.props;

    return (
      <ViewTypeCard>
        <ImageType source={{uri: typeImage}} resizeMode={"contain"} />
        <TextType numberOfLines={1}>{type}</TextType>
        {attribute && <ImageEquip source={{uri: attributeImage}} resizeMode={"contain"} />}
        {race && <ImageEquip source={{uri: raceImage}} resizeMode={"contain"} />}
      </ViewTypeCard>
    );
  }
}
