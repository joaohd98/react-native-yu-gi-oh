import React from "react";
import {Animated, Dimensions, Image, View} from "react-native";
import {ShowCardsListStyles} from "../list-cards/styles";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";

interface Props {
  card?: AllCardsResponse;
  refCardImage?: Image;
  screenHeight: number;
  closeImage: () => void;
}

interface State {
  opacity: Animated.Value;
  position: Animated.ValueXY;
  size: Animated.ValueXY;
}

export class ShowCardsFullImage extends React.Component<Props, State> {
  state: State = {
    opacity: new Animated.Value(0),
    position: new Animated.ValueXY({x: 0, y: 0}),
    size: new Animated.ValueXY({x: 0, y: 0}),
  };

  fullImageView: View | null = null;
  imageDimensions: {x: number; y: number; width: number; height: number} | null = null;

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (!prevProps.card && this.props.card) {
      this.handleOpenImage();
    }
  }

  handleOpenImage = () => {
    const activeImage = this.props.refCardImage;
    const {position, size, opacity} = this.state;

    activeImage!.measure((x, y, width, height, pageX, pageY) => {
      const offset = Dimensions.get("window").height - this.props.screenHeight;
      const valueY = pageY - offset;
      this.imageDimensions = {x: pageX, y: valueY, width, height};

      position.setValue({x: pageX, y: valueY});
      size.setValue({x: width, y: height});

      this.fullImageView?.measure((tx, ty, twidth, theigth) => {
        Animated.stagger(150, [
          Animated.spring(opacity, {
            toValue: 1,
            useNativeDriver: false,
          }),
          Animated.parallel([
            Animated.spring(position.x, {
              toValue: tx,
              useNativeDriver: false,
            }),
            Animated.spring(position.y, {
              toValue: ty,
              useNativeDriver: false,
            }),
            Animated.spring(size.x, {
              toValue: twidth,
              useNativeDriver: false,
            }),
            Animated.spring(size.y, {
              toValue: theigth,
              useNativeDriver: false,
            }),
          ]),
        ]).start();
      });
    });
  };

  handleCloseImage = () => {
    const {x, y, width, height} = this.imageDimensions!;
    const {position, size, opacity} = this.state!;

    Animated.parallel([
      Animated.timing(position.x, {
        toValue: x,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(position.y, {
        toValue: y,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(size.x, {
        toValue: width,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(size.y, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(this.props.closeImage);
  };

  render() {
    const {
      FullImageContainer,
      FullImageButton,
      FullImageIcon,
      FullImageView,
      FullImage,
    } = ShowCardsListStyles;
    const {size, position, opacity} = this.state;
    const {card} = this.props;
    const image = card ? {uri: card.getImage("big")} : undefined;

    const viewStyle = {
      opacity: opacity,
    };

    const activeImageStyle = {
      width: size.x,
      height: size.y,
      left: position.x,
      top: position.y,
    };

    return (
      <FullImageContainer style={viewStyle} pointerEvents={card ? "auto" : "none"}>
        <FullImageView ref={ref => (this.fullImageView = ref)} />
        <FullImage style={activeImageStyle} source={image} resizeMode={"contain"} />
        <FullImageButton onPress={this.handleCloseImage}>
          <FullImageIcon name={"times-circle"} />
        </FullImageButton>
      </FullImageContainer>
    );
  }
}
