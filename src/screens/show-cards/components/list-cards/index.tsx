import {Animated, Dimensions, Image, View} from "react-native";
import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCard} from "../card";
import {ShowCardsListStyles} from "./styles";
import {ServiceStatus} from "../../../../services/model";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";

interface Props {
  cards: AllCardsResponse[];
  status: ServiceStatus;
}

interface State {
  activeIndex: number | null;
  cardsAnimations: Animated.Value[];
  fullImageAnimation: {
    opacity: Animated.Value;
    position: Animated.ValueXY;
    size: Animated.ValueXY;
  };
}

export class ShowCardsList extends React.Component<Props, State> {
  state: State = {
    activeIndex: null,
    cardsAnimations: [],
    fullImageAnimation: {
      opacity: new Animated.Value(0),
      position: new Animated.ValueXY({x: 0, y: 0}),
      size: new Animated.ValueXY({x: 0, y: 0}),
    },
  };

  listRefImage: Image[] = [];
  fullImageView: View | null = null;
  imageDimensions: {x: number; y: number; width: number; height: number} | null = null;
  pageSearchBarHeight = 0;

  handleOpenImage = (index: number) => {
    const activeImage = this.listRefImage[index];
    const {position, size, opacity} = this.state.fullImageAnimation;

    activeImage.measure((x, y, width, height, pageX, pageY) => {
      const offset = Dimensions.get("window").height - this.pageSearchBarHeight;
      const valueY = pageY - offset;
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
    const {cards} = this.props;
    const {activeIndex} = this.state;
    const {size, position, opacity} = this.state.fullImageAnimation;
    const image =
      activeIndex !== null ? {uri: cards[activeIndex].card_images[0].image_url_small} : undefined;

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
        pointerEvents={this.state.activeIndex !== null ? "auto" : "none"}
      >
        <FullImageView ref={ref => (this.fullImageView = ref)} />
        <FullImage style={activeImageStyle} source={image} resizeMode={"contain"} />
        <FullImageButton onPress={this.handleCloseImage}>
          <FullImageIcon name={"times-circle"} />
        </FullImageButton>
      </FullImageContainer>
    );
  };

  getAnimationStyle = (index: number) => {
    const isEven = index % 2 === 0;
    const width = (Dimensions.get("window").width / 2) * (isEven ? 1 : -1);
    const {cardsAnimations} = this.state;
    let animated = cardsAnimations[index];

    if (!cardsAnimations[index]) {
      animated = new Animated.Value(width);
      cardsAnimations[index] = animated;
    }

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
    const {status} = this.props;
    const cards = AllCardsResponse.isLoadingCards(status, this.props.cards);

    return (
      <>
        <List
          onLayout={ref => (this.pageSearchBarHeight = ref.nativeEvent.layout.height)}
          data={cards}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={status !== ServiceStatus.loading}
          ItemSeparatorComponent={this.getSeparatorComponent}
          renderItem={({item, index}) => (
            <ShowCardsListCard
              setRef={ref => (this.listRefImage[index] = ref)}
              style={this.getAnimationStyle(index)}
              onOpenImage={() => this.handleOpenImage(index)}
              isLoading={status === ServiceStatus.loading}
              cardContent={item}
            />
          )}
        />
        {this.getFullImage()}
      </>
    );
  }
}
