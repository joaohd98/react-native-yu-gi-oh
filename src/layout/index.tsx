import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ShowCardsScreen} from '../screens/show-cards';

const Stack = createStackNavigator();

export class Layout extends React.PureComponent {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ShowCardsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}
