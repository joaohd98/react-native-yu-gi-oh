import React from "react";
import {DetailsCardDescriptionStyles} from "./styles";

interface Props {
  description: string;
  type: string;
  race: string;
}

export class DetailsCardDescription extends React.Component<Props> {
  getTypeText = () => {
    const {type} = this.props;

    return `/ ${type.split(" ")[0]}`;
  };

  render() {
    const {View, TextDescription, TextType} = DetailsCardDescriptionStyles;
    const {description, race} = this.props;

    return (
      <View>
        <TextType>
          [{race} {this.getTypeText()}]
        </TextType>
        <TextDescription>{description}</TextDescription>
      </View>
    );
  }
}
