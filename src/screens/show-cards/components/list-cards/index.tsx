import {Animated, Dimensions, FlatList} from "react-native";
import React from "react";
import {ViewAnimatedStyles} from "../../../../helpers/animated-types";

interface Props {
  test?: undefined;
}

interface State {
  test: undefined;
}

export class ShowCardsListCards extends React.Component<Props, State> {
  render() {
    const list = [];

    for (let i = 0; i < 10; i++) {
      list.push({
        key: i.toString(),
      });
    }

    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => {
          const width = Dimensions.get("window").width * (index % 2 === 0 ? 1 : -1);
          const animated = new Animated.Value(width);

          Animated.timing(animated, {
            toValue: 0,
            duration: 200,
            delay: 150 * index,
            useNativeDriver: true,
          }).start();

          const viewStyle: ViewAnimatedStyles = {
            transform: [
              {
                translateX: animated,
              },
            ],
          };

          return (
            <Animated.View
              key={item.key}
              style={[viewStyle, {padding: 20, marginVertical: 20, backgroundColor: "red"}]}
            />
          );
        }}
      />
    );
  }
}
