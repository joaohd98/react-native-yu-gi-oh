import React from "react";
import {DetailsCardIdStyles} from "./styles";

interface Props {
  id: number;
}

interface State {}

export class DetailsCardId extends React.Component<Props> {
  state: State = {};

  render() {
    const {View, Text, TextCaption} = DetailsCardIdStyles;
    const {id} = this.props;

    return (
      <View>
        <TextCaption>ID: </TextCaption>
        <Text>{id}</Text>
      </View>
    );
  }
}
