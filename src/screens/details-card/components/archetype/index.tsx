import React from "react";
import {DetailsCardArchetypeStyles} from "./styles";

interface Props {
  archetype: string;
}

interface State {}

export class DetailsCardArchetype extends React.Component<Props> {
  state: State = {};

  render() {
    const {Icon, Text, TextCaption} = DetailsCardArchetypeStyles;
    const {archetype} = this.props;

    return (
      <Text>
        <Icon name={"building"} />
        <TextCaption> Archetype: </TextCaption>
        {archetype}
      </Text>
    );
  }
}
