import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {ShowCardsScreen} from "../screens/show-cards";
import {RoutesName} from "../routes/routes-name";
import {Colors} from "../theme/colors";

const Stack = createStackNavigator<RoutesName>();

export class Layout extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.headerColor,
            },
          }}
        >
          <Stack.Screen name="ShowCardsScreen" component={ShowCardsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
