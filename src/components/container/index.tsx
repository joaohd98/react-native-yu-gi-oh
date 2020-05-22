import React from "react";
import {ContainerStyles} from "./styles";
import {LayoutChangeEvent} from "react-native";

interface Props {
  children: Element | Element[];
  onLayout?: (event: LayoutChangeEvent) => void;
}

export class Container extends React.Component<Props> {
  render() {
    const {SafeAreaView} = ContainerStyles;
    const {onLayout} = this.props;

    return (
      <SafeAreaView onLayout={event => (onLayout ? onLayout(event) : {})}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}
