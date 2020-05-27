import React from "react";
import {DetailsCardNameImageStyles} from "./styles";
import {Animated} from "react-native";

interface Props {
  name: string;
  image?: string;
  animationScroll: Animated.Value;
}

export class DetailsCardNameImage extends React.Component<Props> {
  render() {
    const {ImageCard, ImageName} = DetailsCardNameImageStyles;
    const {name, image} = this.props;

    return (
      <>
        <ImageCard source={{uri: image}} resizeMode={"stretch"} />
        <ImageName source={{uri: image}} />
      </>
    );
  }
}
