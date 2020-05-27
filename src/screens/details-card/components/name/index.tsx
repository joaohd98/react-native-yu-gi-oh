import React from "react";
import {Animated} from "react-native";
import ImageEditor, {ImageCropData} from "@react-native-community/image-editor";
import {DetailsCardNameStyles} from "./styles";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";

interface Props {
  animationScroll: Animated.Value;
  image?: string;
}

interface State {
  imageName?: string;
}

export class DetailsCardName extends React.Component<Props, State> {
  state: State = {
    imageName: undefined,
  };

  componentDidMount() {
    const {image} = this.props;

    if (image) {
      const cropData: ImageCropData = {
        offset: {x: 20, y: 21},
        size: {width: 380, height: 55},
        displaySize: {width: 380, height: 55},
        resizeMode: "stretch",
      };

      ImageEditor.cropImage(image, cropData).then(imageName => {
        this.setState({imageName});
      });
    }
  }

  render() {
    const {ImageName} = DetailsCardNameStyles;
    const {animationScroll} = this.props;
    const {imageName} = this.state;

    const stylesAnimation: ViewAnimatedStyles = {
      opacity: animationScroll.interpolate({
        inputRange: [50, 150],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    return <ImageName style={stylesAnimation} source={{uri: imageName}} resizeMode={"stretch"} />;
  }
}
