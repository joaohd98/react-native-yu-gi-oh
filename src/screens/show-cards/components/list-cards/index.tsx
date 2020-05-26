import {Animated, Dimensions, FlatList, Image} from "react-native";
import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";
import {ShowCardsListCard} from "../card";
import {ShowCardsListStyles} from "./styles";
import {ServiceStatus} from "../../../../services/model";
import {AllCardsResponse} from "../../../../services/get-all-cards/response";
import {images} from "../../../../theme/images";
import {ShowCardsFullImage} from "../full-image";

interface Props {
  cards: AllCardsResponse[];
  limitIndexAnimation: number;
  status: ServiceStatus;
  screenHeight: number;
  addCardsLimit: () => void;
  hasMoreToLoad: boolean;
  searchText: string;
}

interface State {
  activeIndex?: number;
  cardsAnimations: Animated.Value[];
  loadingIcons: {name: string; animated: Animated.Value}[];
  hasReachBottom: boolean;
}

export class ShowCardsList extends React.Component<Props, State> {
  state: State = {
    cardsAnimations: [],
    hasReachBottom: false,
    loadingIcons: [
      {name: images.millenniumEye, animated: new Animated.Value(0)},
      {name: images.millenniumKey, animated: new Animated.Value(0)},
      {name: images.millenniumNecklace, animated: new Animated.Value(0)},
      {name: images.millenniumPuzzle, animated: new Animated.Value(0)},
      {name: images.millenniumRing, animated: new Animated.Value(0)},
      {name: images.millenniumRod, animated: new Animated.Value(0)},
      {name: images.millenniumScale, animated: new Animated.Value(0)},
    ],
  };

  flatListRef: FlatList | null = null;
  listRefImage: {[key: string]: Image} = {};

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.state.hasReachBottom && prevProps.cards.length !== this.props.cards.length) {
      this.setState({hasReachBottom: false});
    }

    if (this.flatListRef && this.props.searchText !== prevProps.searchText) {
      this.flatListRef.scrollToOffset({animated: false, offset: 0});
    }

    if (prevProps.searchText !== this.props.searchText) {
      console.log(this.listRefImage);
    }
  }

  getSeparatorComponent = () => {
    const {Separator} = ShowCardsListStyles;

    return <Separator />;
  };

  getEmptyComponent = () => {
    const {status} = this.props;
    const {ViewError, TextTitleError, TextMessageError} = ShowCardsListStyles;

    const titleExceptionOrNoInternet = "It was not possible to get the cards";
    const titleNoResultFound = "There is not result with this search";

    const messageException = "We deeply sorry for that, try again later";
    const messageNoInternet = "Check yor internet connection and try again later";
    const messageNoResultFound = "Try to search with a different word";

    return (
      <ViewError>
        <TextTitleError>
          {status === ServiceStatus.exception || status === ServiceStatus.noInternet
            ? titleExceptionOrNoInternet
            : titleNoResultFound}
        </TextTitleError>
        <TextMessageError>
          {status === ServiceStatus.exception
            ? messageException
            : status === ServiceStatus.noInternet
            ? messageNoInternet
            : messageNoResultFound}
        </TextMessageError>
      </ViewError>
    );
  };

  getFooterComponent = () => {
    const {ViewFooter, ImageFooter} = ShowCardsListStyles;
    const icons = this.state.loadingIcons;
    const animations: Animated.CompositeAnimation[] = [];
    const elements: Element[] = [];
    const valueAnimated = -30;
    const seconds = 200;

    if (!this.state.hasReachBottom) {
      return <></>;
    }

    icons.forEach(icon => {
      icon.animated.setValue(0);

      animations.push(
        Animated.timing(icon.animated, {
          toValue: valueAnimated,
          duration: seconds / 2,
          useNativeDriver: false,
        })
      );
      animations.push(
        Animated.timing(icon.animated, {
          toValue: 0,
          duration: seconds / 2,
          useNativeDriver: false,
        })
      );
    });

    Animated.loop(Animated.stagger(seconds, animations)).start();

    icons.forEach((icon, index) => {
      const styles: ViewAnimatedStyles = {
        transform: [
          {
            translateY: icon.animated,
          },
          {
            scale: icon.animated.interpolate({
              inputRange: [valueAnimated, 0],
              outputRange: [1.5, 1],
            }),
          },
        ],
      };

      elements.push(
        <ImageFooter
          key={index.toString()}
          style={styles}
          source={icon.name}
          resizeMode={"contain"}
        />
      );
    });

    return <ViewFooter>{elements}</ViewFooter>;
  };

  onEndReached = () => {
    if (!this.state.hasReachBottom && this.props.hasMoreToLoad) {
      this.setState({hasReachBottom: true}, () => {
        setTimeout(() => this.props.addCardsLimit(), Math.random() * 5000);
      });
    }
  };

  getAnimationStyle = (index: number) => {
    const isEven = index % 2 === 0;
    const width = (Dimensions.get("window").width / 1.5) * (isEven ? 1 : -1);
    const {cardsAnimations} = this.state;
    const {limitIndexAnimation} = this.props;
    let animated = cardsAnimations[index];

    if (!cardsAnimations[index]) {
      animated = new Animated.Value(width);
      cardsAnimations[index] = animated;
    }

    Animated.sequence([
      Animated.delay(150 * (index >= limitIndexAnimation ? 1 : index)),
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

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

  render() {
    const {List} = ShowCardsListStyles;
    const {status, screenHeight} = this.props;
    const {activeIndex} = this.state;
    const cards = AllCardsResponse.isLoadingCards(status, this.props.cards);

    return (
      <>
        <List
          ref={ref => (this.flatListRef = ref)}
          data={cards}
          removeClippedSubviews={true}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={status !== ServiceStatus.loading}
          ItemSeparatorComponent={this.getSeparatorComponent}
          ListEmptyComponent={this.getEmptyComponent}
          ListFooterComponent={this.getFooterComponent}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={1}
          renderItem={({item, index}) => (
            <ShowCardsListCard
              setRef={ref => (this.listRefImage[index] = ref)}
              style={this.getAnimationStyle(index)}
              onOpenImage={() => this.setState({activeIndex: index})}
              isLoading={status === ServiceStatus.loading}
              cardContent={item}
            />
          )}
        />
        <ShowCardsFullImage
          card={activeIndex !== undefined ? cards[activeIndex] : undefined}
          refCardImage={activeIndex !== undefined ? this.listRefImage[activeIndex] : undefined}
          screenHeight={screenHeight}
          closeImage={() => this.setState({activeIndex: undefined})}
        />
      </>
    );
  }
}
