import React from "react";
import {DetailsCardLevelStyles} from "./styles";
import {images} from "../../../../theme/images";

interface Props {
  level: number;
}

export class DetailsCardLevel extends React.Component<Props> {
  render() {
    const {View, ImageLevel} = DetailsCardLevelStyles;
    const {level} = this.props;
    const elements: Element[] = [];

    for (let i = 1; i <= 12; i++) {
      elements.push(
        <ImageLevel
          key={i.toString()}
          isHidden={i > level}
          source={images.level}
          resizeMode={"stretch"}
        />
      );
    }

    return <View>{elements}</View>;
  }
}
