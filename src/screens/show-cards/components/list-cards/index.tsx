import {Animated, Dimensions, Image, View} from "react-native";
import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCard} from "../card";
import {ShowCardsListStyles} from "./styles";

interface Props {
  test?: undefined;
}

interface State {
  activeIndex: number | null;
  list: YuGiCard[];
  fullImageAnimation: {
    opacity: Animated.Value;
    position: Animated.ValueXY;
    size: Animated.ValueXY;
  };
}

class YuGiCard {
  key!: string;
  image!: string;
  animated!: Animated.Value;

  constructor(index: number, image: string) {
    const isEven = index % 2 === 0;
    const width = (Dimensions.get("window").width / 2) * (isEven ? 1 : -1);

    Object.assign(this, {
      key: index.toString(),
      animated: new Animated.Value(width),
      image,
    });
  }
}

const lisssst = [
  new YuGiCard(1, "https://ygoprodeck.com/pics/64163367.jpg"),
  new YuGiCard(2, "https://ygoprodeck.com/pics/91231901.jpg"),
  new YuGiCard(3, "https://ygoprodeck.com/pics/64163367.jpg"),
  new YuGiCard(4, "https://ygoprodeck.com/pics/91231901.jpg"),
  new YuGiCard(5, "https://ygoprodeck.com/pics/64163367.jpg"),
  new YuGiCard(6, "https://ygoprodeck.com/pics/91231901.jpg"),
];

export class ShowCardsList extends React.Component<Props, State> {
  state: State = {
    list: lisssst,
    activeIndex: null,
    fullImageAnimation: {
      opacity: new Animated.Value(0),
      position: new Animated.ValueXY({x: 0, y: 0}),
      size: new Animated.ValueXY({x: 0, y: 0}),
    },
  };

  fullImageView: View | null = null;
  listImageRef: Image[] = [];
  imageDimensions: {x: number; y: number; width: number; height: number} | null = null;
  pageRealSize: number = Dimensions.get("window").height;

  handleOpenImage = (index: number) => {
    const activeImage = this.listImageRef[index];
    const {position, size, opacity} = this.state.fullImageAnimation;

    activeImage.measure((x, y, width, height, pageX, pageY) => {
      const valueY = pageY - this.pageRealSize;
      this.imageDimensions = {x: pageX, y: valueY, width, height};

      position.setValue({x: pageX, y: valueY});
      size.setValue({x: width, y: height});

      this.setState({activeIndex: index}, () => {
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
    });
  };

  handleCloseImage = () => {
    const {x, y, width, height} = this.imageDimensions!;
    const {position, size, opacity} = this.state.fullImageAnimation!;

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
    ]).start(() => this.setState({activeIndex: null}));
  };

  getFullImage = () => {
    const {
      FullImageContainer,
      FullImageButton,
      FullImageIcon,
      FullImageView,
      FullImage,
    } = ShowCardsListStyles;
    const {list, activeIndex} = this.state;
    const {size, position, opacity} = this.state.fullImageAnimation;
    const image = activeIndex !== null ? {uri: list[activeIndex].image} : undefined;

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
      <FullImageContainer
        style={viewStyle}
        onLayout={layout => (this.pageRealSize -= layout.nativeEvent.layout.height)}
        pointerEvents={this.state.activeIndex !== null ? "auto" : "none"}
      >
        <FullImageButton onPress={this.handleCloseImage}>
          <FullImageIcon name={"times-circle"} />
        </FullImageButton>
        <FullImageView ref={ref => (this.fullImageView = ref)} />
        <FullImage style={activeImageStyle} source={image} resizeMode={"contain"} />
      </FullImageContainer>
    );
  };

  getAnimationStyle = (index: number) => {
    const isEven = index % 2 === 0;
    const width = (Dimensions.get("window").width / 2) * (isEven ? 1 : -1);
    const {animated} = this.state.list[index];

    Animated.timing(animated, {
      toValue: 0,
      duration: 200,
      delay: 100 * index,
      useNativeDriver: true,
    }).start();

    const viewStyle: ViewAnimatedStyles = {
      opacity: animated.interpolate({
        inputRange: isEven ? [0, width] : [width, 0],
        outputRange: isEven ? [1, 0] : [0, 1],
      }),
      transform: [
        {
          translateX: animated,
        },
      ],
    };

    return viewStyle;
  };

  getSeparatorComponent = () => {
    const {Separator} = ShowCardsListStyles;

    return <Separator />;
  };

  render() {
    const {List} = ShowCardsListStyles;
    const {list} = this.state;

    return (
      <>
        <List
          data={list}
          ItemSeparatorComponent={this.getSeparatorComponent}
          renderItem={({item, index}) => (
            <ShowCardsListCard
              key={item.key}
              image={item.image}
              onOpenImage={() => this.handleOpenImage(index)}
              setRef={ref => (this.listImageRef[index] = ref)}
              style={this.getAnimationStyle(index)}
            />
          )}
        />
        {this.getFullImage()}
      </>
    );
  }
}
