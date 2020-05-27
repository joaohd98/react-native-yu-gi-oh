import React from "react";
import {DetailsCardAtkDefStyles} from "./styles";

interface Props {
  atk: number;
  def: number;
}

export class DetailsCardAtkDef extends React.Component<Props> {
  render() {
    const {View, Text, TextCaption} = DetailsCardAtkDefStyles;
    const {atk, def} = this.props;

    return (
      <View>
        <TextCaption>ATK/</TextCaption>
        <Text>{atk}</Text>
        <TextCaption>DEF/</TextCaption>
        <Text>{def}</Text>
      </View>
    );
  }
}
