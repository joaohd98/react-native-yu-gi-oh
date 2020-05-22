import React from "react";
import {ContainerStyles} from "./styles";

interface Props {
  children: Element | Element[];
}

export class Container extends React.Component<Props> {
  render() {
    return <ContainerStyles.SafeAreaView>{this.props.children}</ContainerStyles.SafeAreaView>;
  }
}
