import React from "react";
import {DetailsCardAtkDefStyles} from "./styles";

interface Props {
  atk: number;
  def: number;
}

export class DetailsCardAtkDef extends React.Component<Props> {
  render() {
    const {Text, TextCaption} = DetailsCardAtkDefStyles;
    const {atk, def} = this.props;

    return (
      <Text>
        <TextCaption>ATK/ </TextCaption> {atk}
        <TextCaption> DEF/ </TextCaption> {def}
      </Text>
    );
  }
}
