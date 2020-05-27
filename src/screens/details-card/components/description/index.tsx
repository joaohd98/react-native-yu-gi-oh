import React from "react";
import {DetailsCardDescriptionStyles} from "./styles";

interface Props {
  description: string;
}

interface State {}

export class DetailsCardDescription extends React.Component<Props> {
  state: State = {};

  render() {
    const {Text} = DetailsCardDescriptionStyles;
    const {description} = this.props;

    return <Text>{description}</Text>;
  }
}
